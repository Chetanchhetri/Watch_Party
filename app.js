// ===================== STATE =====================
let peer = null;
let myPeerId = null;
let hostPeerId = null;
let isHost = false;
let myName = 'User';

let localStream = null;
let isMicOn = true;
let isCamOn = true;
let isMirrored = true;
let currentFacingMode = 'user';
let currentDeviceId = null;

let isRemoteEvent = false;
let roomMode = 'meet'; // 'native' | 'drive' | 'meet'
let originalDriveLink = null; // kept so we can fall back to the iframe embed if direct playback fails
let hasFallenBackToIframe = false;
let heartbeatTimer = null;
let approvedIds = new Set();       // host only: peer ids allowed to call/connect
let pendingRequests = new Map();   // host only: peerId -> { conn, name }

// Browsers block unmuted programmatic video.play() unless it happens as the
// direct result of a real click/tap on THIS document. A play() call fired
// from an incoming data-channel message doesn't count, so guests receiving
// a SYNC_COMMAND never actually start playback until they've supplied one
// real gesture. This tracks whether that gesture has happened yet, and
// pendingSyncState remembers the latest target (play/pause + time) so we
// can apply it the instant the guest taps "Start Watching Together".
let playbackUnlocked = false;
let pendingSyncState = null; // { playing, time }

// peers[id] = { name, conn, call, stream }
let peers = {};

let spotlightId = null; // null = show movie/meet stage. 'local' or a peer id = spotlighted

// DOM Elements
const nativePlayer = document.getElementById('nativePlayer');
const driveIframe = document.getElementById('driveIframe');
const driveFrameWrap = document.getElementById('driveFrameWrap');
const meetStage = document.getElementById('meetStage');
const spotlightStage = document.getElementById('spotlightStage');
const spotlightVideo = document.getElementById('spotlightVideo');
const spotlightTag = document.getElementById('spotlightTag');
const playStateBadge = document.getElementById('playStateBadge');
const hostOverlayControls = document.getElementById('hostOverlayControls');
const hostBadge = document.getElementById('hostBadge');
const joinRequestsBar = document.getElementById('joinRequestsBar');
const videoUnlockOverlay = document.getElementById('videoUnlockOverlay');
const btnUnlockPlayback = document.getElementById('btnUnlockPlayback');
const btnResync = document.getElementById('btnResync');
const nativeSyncBadge = document.getElementById('nativeSyncBadge');
const nativeSyncBadgeText = document.getElementById('nativeSyncBadgeText');

function setNativeSyncBadge(text, visible) {
  nativeSyncBadgeText.innerText = text;
  nativeSyncBadge.classList.toggle('hidden', !visible);
}

// ===================== UTIL =====================
function driveFileIdFrom(url) {
  const m = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  return m ? m[1] : null;
}

// Direct-stream URL: lets the native <video> element play a Drive file so
// play/pause/seek can be truly forced for everyone, no "please press play" needed.
function parseGDriveDirectUrl(url) {
  const id = driveFileIdFrom(url);
  return id ? `https://drive.google.com/uc?export=download&id=${id}` : url;
}

// Fallback embed used only if the direct stream can't be played (huge file,
// restricted permissions, etc). This one truly cannot be remote-controlled by
// script since it's a cross-origin iframe with no exposed API.
function parseGDriveStreamUrl(url) {
  const id = driveFileIdFrom(url);
  return id ? `https://drive.google.com/file/d/${id}/preview` : url;
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.classList.remove('hidden');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.add('hidden'), 3000);
}

function participantCount() {
  return Object.keys(peers).length + 1;
}

function updateParticipantCount() {
  document.getElementById('participantCount').innerText = participantCount();
}

// ===================== MEDIA SETUP =====================
async function setupLocalMedia() {
  try {
    localStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: currentFacingMode },
      audio: true
    });
    document.getElementById('localVideo').srcObject = localStream;
    applyMirrorToLocal();
    populateCameraList();
  } catch (err) {
    console.warn('Camera/Mic permission warning:', err);
    showToast('Media access warning: running with audio/video disabled.');
  }
}

async function populateCameraList() {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cams = devices.filter(d => d.kind === 'videoinput');
    const select = document.getElementById('cameraSelect');
    select.innerHTML = '';
    cams.forEach((cam, i) => {
      const opt = document.createElement('option');
      opt.value = cam.deviceId;
      opt.innerText = cam.label || `Camera ${i + 1}`;
      select.appendChild(opt);
    });
    if (localStream) {
      const activeId = localStream.getVideoTracks()[0]?.getSettings().deviceId;
      if (activeId) select.value = activeId;
    }
  } catch (e) {
    console.warn('Could not list cameras', e);
  }
}

async function switchVideoSource(constraints) {
  if (!localStream) return;
  try {
    const newStream = await navigator.mediaDevices.getUserMedia({ video: constraints, audio: false });
    const newTrack = newStream.getVideoTracks()[0];
    if (!newTrack) return;

    // Swap track in local stream
    const oldTrack = localStream.getVideoTracks()[0];
    if (oldTrack) {
      localStream.removeTrack(oldTrack);
      oldTrack.stop();
    }
    localStream.addTrack(newTrack);
    newTrack.enabled = isCamOn;
    document.getElementById('localVideo').srcObject = localStream;

    // Push new track to every active call so remote peers see the change too
    Object.values(peers).forEach(p => {
      const pc = p.call && p.call.peerConnection;
      if (!pc) return;
      const sender = pc.getSenders().find(s => s.track && s.track.kind === 'video');
      if (sender) sender.replaceTrack(newTrack);
    });

    populateCameraList();
  } catch (err) {
    console.warn('Camera switch failed:', err);
    showToast('Could not switch camera.');
  }
}

function applyMirrorToLocal() {
  const video = document.getElementById('localVideo');
  video.classList.toggle('mirrored', isMirrored);
}

// ===================== CAMERA SETTINGS UI =====================
document.getElementById('btnCamSettings').addEventListener('click', (e) => {
  e.stopPropagation();
  document.getElementById('camSettingsPanel').classList.toggle('hidden');
});
document.addEventListener('click', (e) => {
  const panel = document.getElementById('camSettingsPanel');
  const wrap = document.querySelector('.cam-settings-wrap');
  if (!panel.classList.contains('hidden') && !wrap.contains(e.target)) {
    panel.classList.add('hidden');
  }
});

document.getElementById('btnFlipCamera').addEventListener('click', () => {
  currentFacingMode = currentFacingMode === 'user' ? 'environment' : 'user';
  switchVideoSource({ facingMode: currentFacingMode });
  showToast(`Switched to ${currentFacingMode === 'user' ? 'front' : 'back'} camera`);
});

document.getElementById('btnMirrorCamera').addEventListener('click', () => {
  isMirrored = !isMirrored;
  document.getElementById('mirrorState').innerText = isMirrored ? 'On' : 'Off';
  applyMirrorToLocal();
});

document.getElementById('cameraSelect').addEventListener('change', (e) => {
  currentDeviceId = e.target.value;
  switchVideoSource({ deviceId: { exact: currentDeviceId } });
});

// ===================== TOGGLE CAM/MIC =====================
document.getElementById('btnToggleCam').addEventListener('click', () => {
  if (!localStream) return;
  const track = localStream.getVideoTracks()[0];
  if (track) {
    isCamOn = !isCamOn;
    track.enabled = isCamOn;
    const btn = document.getElementById('btnToggleCam');
    btn.className = `control-btn ${isCamOn ? 'active' : 'off'}`;
    btn.querySelector('.icon').innerText = isCamOn ? '📹' : '📷';
    broadcast({ type: 'MEDIA_STATE', sender: myName, cam: isCamOn });
  }
});

document.getElementById('btnToggleMic').addEventListener('click', () => {
  if (!localStream) return;
  const track = localStream.getAudioTracks()[0];
  if (track) {
    isMicOn = !isMicOn;
    track.enabled = isMicOn;
    const btn = document.getElementById('btnToggleMic');
    btn.className = `control-btn ${isMicOn ? 'active' : 'off'}`;
    btn.querySelector('.icon').innerText = isMicOn ? '🎙️' : '🔇';
    document.getElementById('localMicTag').innerText = isMicOn ? '🎙️' : '🔇';
    broadcast({ type: 'MEDIA_STATE', sender: myName, mic: isMicOn });
  }
});

// ===================== PEERJS / NETWORKING =====================
function createPeer(id) {
  const p = id ? new Peer(id, { debug: 1 }) : new Peer({ debug: 1 });

  p.on('connection', (conn) => {
    conn.on('data', (data) => handleIncomingData(data, conn));
    conn.on('close', () => removePeerById(conn.peer));
  });

  p.on('call', (call) => {
    if (isHost && !approvedIds.has(call.peer)) {
      call.close();
      return;
    }
    call.answer(localStream);
    bindMediaCall(call);
  });

  p.on('error', (err) => {
    console.error('Peer error:', err);
    if (err.type === 'peer-unavailable') {
      showToast('Room not found. Check the code and try again.');
      goBackToLanding();
    }
  });

  return p;
}

function bindMediaCall(call) {
  const peerId = call.peer;
  peers[peerId] = peers[peerId] || { name: 'Guest' };
  peers[peerId].call = call;

  call.on('stream', (remoteStream) => {
    peers[peerId].stream = remoteStream;
    renderRemoteUserVideo(peerId, remoteStream);
  });
  call.on('close', () => removePeerById(peerId));
}

function bindDataConnection(conn) {
  const peerId = conn.peer;
  peers[peerId] = peers[peerId] || { name: 'Guest' };
  peers[peerId].conn = conn;
  conn.on('data', (data) => handleIncomingData(data, conn));
  conn.on('close', () => removePeerById(peerId));
}

function removePeerById(peerId) {
  const card = document.getElementById(`card-${peerId}`);
  if (card) card.remove();
  delete peers[peerId];
  approvedIds.delete(peerId);
  if (spotlightId === peerId) exitSpotlight();
  updateParticipantCount();
}

function broadcast(packet) {
  Object.values(peers).forEach(p => {
    if (p.conn && p.conn.open) p.conn.send(packet);
  });
}

// ---- Host: initialize a fresh room ----
function initHostPeer(customCode) {
  const roomCode = customCode ? customCode.toLowerCase() : Math.random().toString(36).substring(2, 8);
  const fullPeerId = `cinesync-v2-${roomCode}`;
  hostPeerId = fullPeerId;
  peer = createPeer(fullPeerId);

  peer.on('open', (id) => {
    myPeerId = id;
    const displayCode = id.replace('cinesync-v2-', '').toUpperCase();
    document.getElementById('roomCodeDisplay').innerText = displayCode;
  });
}

// ---- Guest: connect to an existing room ----
function initGuestPeer(roomCode) {
  hostPeerId = `cinesync-v2-${roomCode.toLowerCase()}`;
  peer = createPeer(null);

  peer.on('open', (id) => {
    myPeerId = id;
    const conn = peer.connect(hostPeerId, { metadata: { name: myName } });
    peers[hostPeerId] = { name: 'Host', conn };
    conn.on('open', () => {
      conn.send({ type: 'JOIN_REQUEST', name: myName });
    });
    conn.on('data', (data) => handleIncomingData(data, conn));
    conn.on('close', () => {
      showToast('Disconnected from host.');
      goBackToLanding();
    });
  });
}

// ---- Host: someone requests to join ----
function handleJoinRequest(conn, name) {
  const peerId = conn.peer;
  if (approvedIds.has(peerId)) return; // already in
  pendingRequests.set(peerId, { conn, name: name || 'Guest' });
  renderJoinRequests();
  showToast(`${name || 'Someone'} wants to join`);
}

function renderJoinRequests() {
  if (pendingRequests.size === 0) {
    joinRequestsBar.classList.add('hidden');
    joinRequestsBar.innerHTML = '';
    return;
  }
  joinRequestsBar.classList.remove('hidden');
  joinRequestsBar.innerHTML = '';
  pendingRequests.forEach((req, peerId) => {
    const row = document.createElement('div');
    row.className = 'join-request-row';
    row.innerHTML = `
      <span><span class="jr-name">${escapeHtml(req.name)}</span> wants to join the room</span>
      <span class="join-request-actions">
        <button class="jr-btn jr-accept" data-id="${peerId}">Accept</button>
        <button class="jr-btn jr-deny" data-id="${peerId}">Deny</button>
      </span>`;
    row.querySelector('.jr-accept').addEventListener('click', () => approveJoinRequest(peerId));
    row.querySelector('.jr-deny').addEventListener('click', () => denyJoinRequest(peerId));
    joinRequestsBar.appendChild(row);
  });
}

function approveJoinRequest(peerId) {
  const req = pendingRequests.get(peerId);
  if (!req) return;
  pendingRequests.delete(peerId);
  renderJoinRequests();

  approvedIds.add(peerId);
  peers[peerId] = peers[peerId] || {};
  peers[peerId].name = req.name;
  peers[peerId].conn = req.conn;
  bindDataConnection(req.conn);

  const existingPeers = Object.keys(peers)
    .filter(id => id !== peerId)
    .map(id => ({ id, name: peers[id].name || 'Guest' }));

  req.conn.send({
    type: 'JOIN_APPROVED',
    hostId: myPeerId,
    hostName: myName,
    peers: existingPeers,
    room: getRoomStateSnapshot()
  });

  // Let others know the new peer's name so their tiles label correctly
  Object.values(peers).forEach(p => {
    if (p.conn && p.conn.open && p !== peers[peerId]) {
      p.conn.send({ type: 'NEW_PEER', id: peerId, name: req.name });
    }
  });

  if (localStream) {
    const call = peer.call(peerId, localStream);
    bindMediaCall(call);
  }

  updateParticipantCount();
  showToast(`${req.name} joined the room`);
}

function denyJoinRequest(peerId) {
  const req = pendingRequests.get(peerId);
  if (!req) return;
  pendingRequests.delete(peerId);
  renderJoinRequests();
  if (req.conn.open) req.conn.send({ type: 'JOIN_DENIED' });
  setTimeout(() => req.conn.close(), 300);
}

function getRoomStateSnapshot() {
  if (roomMode === 'native') {
    return { mode: 'native', src: nativePlayer.src, playing: !nativePlayer.paused, time: nativePlayer.currentTime };
  }
  if (roomMode === 'drive') {
    return { mode: 'drive', src: driveIframe.src };
  }
  return { mode: 'meet' };
}

// Host-only: if the direct Drive stream fails to play (large file, no
// direct-download permission, etc), fall back to the embed + "notify" flow
// and tell everyone else in the room to switch too.
nativePlayer.addEventListener('error', () => {
  if (!isHost || roomMode !== 'native' || !originalDriveLink || hasFallenBackToIframe) return;
  hasFallenBackToIframe = true;
  roomMode = 'drive';
  driveIframe.src = parseGDriveStreamUrl(originalDriveLink);
  applyRoomState(getRoomStateSnapshot());
  broadcast({ type: 'ROOM_UPDATE', room: getRoomStateSnapshot() });
  showToast("This file can't stream directly — switched everyone to notify mode.");
});

// Host-only: keep everyone tightly synced during playback, not just on
// play/pause/seek events, so small drift and buffering hiccups self-correct.
function startHeartbeat() {
  stopHeartbeat();
  heartbeatTimer = setInterval(() => {
    if (!isHost || roomMode !== 'native') return;
    broadcast({
      type: 'SYNC_COMMAND',
      action: nativePlayer.paused ? 'PAUSE' : 'PLAY',
      time: nativePlayer.currentTime,
      heartbeat: true
    });
  }, 2500);
}
function stopHeartbeat() {
  if (heartbeatTimer) clearInterval(heartbeatTimer);
  heartbeatTimer = null;
}

// ---- Guest: handle host's approval response ----
function onJoinApproved(data) {
  document.getElementById('waitingPage').classList.add('hidden');
  hostPeerId = data.hostId;
  peers[hostPeerId] = peers[hostPeerId] || {};
  peers[hostPeerId].name = data.hostName || 'Host';

  applyRoomState(data.room);

  // Call the host for media (data connection to host already exists)
  if (localStream) {
    const hostCall = peer.call(hostPeerId, localStream);
    bindMediaCall(hostCall);
  }

  // Connect + call every other existing participant (completes the mesh)
  (data.peers || []).forEach(p => {
    if (p.id === hostPeerId || p.id === myPeerId) return;
    peers[p.id] = peers[p.id] || {};
    peers[p.id].name = p.name;
    const conn = peer.connect(p.id, { metadata: { name: myName } });
    bindDataConnection(conn);
    if (localStream) {
      const call = peer.call(p.id, localStream);
      bindMediaCall(call);
    }
  });

  showTheater();
}

function onJoinDenied() {
  showToast('The host declined your request to join.');
  goBackToLanding();
}

function goBackToLanding() {
  document.getElementById('waitingPage').classList.add('hidden');
  document.getElementById('theaterPage').classList.add('hidden');
  document.getElementById('landingPage').classList.remove('hidden');
}

// ===================== ROOM / PLAYER STATE =====================
function applyRoomState(room) {
  roomMode = room.mode;
  nativePlayer.classList.add('hidden');
  driveFrameWrap.classList.add('hidden');
  meetStage.classList.add('hidden');

  if (room.mode === 'native') {
    if (nativePlayer.src !== room.src) {
      nativePlayer.src = room.src;
      nativePlayer.preload = 'auto';
      nativePlayer.load();
    }
    nativePlayer.classList.remove('hidden');
    // Give everyone real controls (volume, fullscreen, and a genuine Play
    // button) — not just the host. A guest's own play/pause stays local
    // (see the 'play'/'pause' listeners below) and self-corrects on the
    // next heartbeat, so this can't desync the room.
    nativePlayer.controls = true;
    if (room.time) nativePlayer.currentTime = room.time;
    setNativeSyncBadge(isHost ? 'Playing for everyone' : 'Synced with the host', true);

    pendingSyncState = { playing: !!room.playing, time: room.time };

    if (isHost || playbackUnlocked) {
      applyPendingSync();
    } else if (room.playing) {
      // Don't fire play() blind — it'll be silently rejected. Ask for the
      // one real tap it needs instead.
      showUnlockOverlay();
    } else {
      nativePlayer.pause();
    }
    if (isHost) startHeartbeat();
  } else if (room.mode === 'drive') {
    driveIframe.src = room.src;
    driveFrameWrap.classList.remove('hidden');
    hostOverlayControls.classList.toggle('hidden', !isHost);
  } else {
    meetStage.classList.remove('hidden');
  }
}

function renderRemoteUserVideo(peerId, stream) {
  let card = document.getElementById(`card-${peerId}`);
  const name = (peers[peerId] && peers[peerId].name) || 'Guest';

  if (!card) {
    const grid = document.getElementById('videoGrid');
    card = document.createElement('div');
    card.className = 'video-card';
    card.id = `card-${peerId}`;
    card.dataset.spotlight = peerId;

    const video = document.createElement('video');
    video.autoplay = true;
    video.playsInline = true;
    video.srcObject = stream;

    const tag = document.createElement('div');
    tag.className = 'user-tag';
    tag.innerHTML = `<span class="peer-name">${escapeHtml(name)}</span><span id="mic-${peerId}">🎙️</span>`;

    const pinHint = document.createElement('div');
    pinHint.className = 'pin-hint';
    pinHint.innerText = 'Tap to spotlight';

    card.appendChild(video);
    card.appendChild(tag);
    card.appendChild(pinHint);
    card.addEventListener('click', () => toggleSpotlight(peerId, name));
    grid.appendChild(card);
  } else {
    card.querySelector('video').srcObject = stream;
    card.querySelector('.peer-name').innerText = name;
  }

  if (spotlightId === peerId) {
    spotlightVideo.srcObject = stream;
  }

  updateParticipantCount();
}

// ===================== SPOTLIGHT / BIG SCREEN =====================
function toggleSpotlight(id, name) {
  if (spotlightId === id) {
    exitSpotlight();
    return;
  }
  spotlightId = id;
  const stream = id === 'local' ? localStream : (peers[id] && peers[id].stream);
  spotlightVideo.srcObject = stream || null;
  spotlightVideo.muted = (id === 'local');
  spotlightVideo.classList.toggle('mirrored', id === 'local' && isMirrored);
  spotlightTag.innerText = id === 'local' ? `${myName} (You)` : name;
  spotlightStage.classList.remove('hidden');
  nativePlayer.classList.add('hidden');
  driveFrameWrap.classList.add('hidden');
  meetStage.classList.add('hidden');

  document.querySelectorAll('.video-card').forEach(c => c.classList.remove('spotlighted'));
  const activeCard = document.querySelector(`[data-spotlight="${id}"]`);
  if (activeCard) activeCard.classList.add('spotlighted');
}

function exitSpotlight() {
  spotlightId = null;
  spotlightStage.classList.add('hidden');
  document.querySelectorAll('.video-card').forEach(c => c.classList.remove('spotlighted'));

  if (roomMode === 'native') nativePlayer.classList.remove('hidden');
  else if (roomMode === 'drive') driveFrameWrap.classList.remove('hidden');
  else meetStage.classList.remove('hidden');
}

document.getElementById('btnExitSpotlight').addEventListener('click', exitSpotlight);
document.getElementById('localVidCard').addEventListener('click', () => toggleSpotlight('local', myName));

// ===================== PLAYBACK UNLOCK (autoplay policy) =====================
// The single reason "only the host's video plays": browsers require a real
// user gesture before they'll let unmuted video start via script. The host
// gets one for free (clicking their own native video controls); guests only
// receive scripted play() calls over the data channel, which get silently
// blocked. Solving that just means asking guests for one tap up front.
function showUnlockOverlay() {
  if (isHost) return;
  videoUnlockOverlay.classList.remove('hidden');
}
function hideUnlockOverlay() {
  videoUnlockOverlay.classList.add('hidden');
  btnResync.classList.add('hidden');
}

function applyPendingSync() {
  if (!pendingSyncState) return;
  isRemoteEvent = true;
  if (pendingSyncState.time !== undefined && pendingSyncState.time !== null) {
    if (Math.abs(nativePlayer.currentTime - pendingSyncState.time) > 0.4) {
      nativePlayer.currentTime = pendingSyncState.time;
    }
  }
  if (pendingSyncState.playing) {
    nativePlayer.play().then(() => {
      hideUnlockOverlay();
      if (!isHost) showToast("You're synced — enjoy the movie 🎬");
    }).catch((err) => {
      console.warn('Playback blocked:', err);
      if (!isHost) {
        showUnlockOverlay();
        btnResync.classList.remove('hidden');
      }
    });
  } else {
    nativePlayer.pause();
    hideUnlockOverlay();
  }
  setTimeout(() => { isRemoteEvent = false; }, 150);
}

btnUnlockPlayback.addEventListener('click', () => {
  // This click IS the real user gesture — everything downstream of it
  // (including future scripted play() calls this session) is now allowed.
  playbackUnlocked = true;
  applyPendingSync();
});

btnResync.addEventListener('click', () => {
  playbackUnlocked = true;
  applyPendingSync();
});

// ===================== SYNC / DATA HANDLING =====================
function handleIncomingData(data, senderConn) {
  switch (data.type) {
    case 'JOIN_REQUEST':
      if (isHost) handleJoinRequest(senderConn, data.name);
      return;
    case 'JOIN_APPROVED':
      onJoinApproved(data);
      return;
    case 'JOIN_DENIED':
      onJoinDenied();
      return;
    case 'NEW_PEER':
      peers[data.id] = peers[data.id] || {};
      peers[data.id].name = data.name;
      { const el = document.querySelector(`#card-${data.id} .peer-name`); if (el) el.innerText = data.name; }
      return;
    case 'ROOM_UPDATE':
      applyRoomState(data.room);
      break;
    case 'SYNC_COMMAND':
      applySyncCommand(data);
      break;
    case 'CHAT':
      appendChatMessage(data.sender, data.text);
      break;
    case 'MEDIA_STATE': {
      const peerId = senderConn.peer;
      if (data.mic !== undefined) {
        const micTag = document.getElementById(`mic-${peerId}`);
        if (micTag) micTag.innerText = data.mic ? '🎙️' : '🔇';
      }
      break;
    }
    default:
      break;
  }

  // Host relays messages to everyone else so the whole mesh stays in sync
  if (isHost) {
    Object.entries(peers).forEach(([id, p]) => {
      if (p.conn && p.conn !== senderConn && p.conn.open) p.conn.send(data);
    });
  }
}

function applySyncCommand(data) {
  const quiet = !!data.heartbeat; // heartbeats correct drift silently, no badge flicker

  if (data.action === 'PLAY') {
    if (!quiet) playStateBadge.innerText = '▶ Playing for all';
    if (!quiet) setNativeSyncBadge('▶ Playing for everyone', true);
    pendingSyncState = { playing: true, time: data.time };
    if (isHost || playbackUnlocked) {
      applyPendingSync();
    } else {
      // First time we know the room is playing but this guest hasn't
      // supplied their unlock gesture yet — ask for it instead of
      // firing a play() that the browser will just reject.
      showUnlockOverlay();
    }
    return;
  } else if (data.action === 'PAUSE') {
    if (!quiet) playStateBadge.innerText = '⏸ Paused for all';
    if (!quiet) setNativeSyncBadge('⏸ Paused for everyone', true);
    pendingSyncState = { playing: false, time: data.time };
    isRemoteEvent = true;
    nativePlayer.pause();
    if (data.time !== undefined && Math.abs(nativePlayer.currentTime - data.time) > 0.4) {
      nativePlayer.currentTime = data.time;
    }
    setTimeout(() => { isRemoteEvent = false; }, 150);
    return;
  } else if (data.action === 'NOTIFY_PLAY') {
    playStateBadge.innerText = '▶ Host says: press play!';
    appendSystemMessage('The host started playback — press play on your end!');
  } else if (data.action === 'NOTIFY_PAUSE') {
    playStateBadge.innerText = '⏸ Host says: pause now';
    appendSystemMessage('The host paused — pause on your end too.');
  }
}

// Native player: only the host's own interactions broadcast sync commands
nativePlayer.addEventListener('play', () => {
  if (isRemoteEvent || !isHost) return;
  broadcast({ type: 'SYNC_COMMAND', action: 'PLAY', time: nativePlayer.currentTime });
});
nativePlayer.addEventListener('pause', () => {
  if (isRemoteEvent || !isHost) return;
  broadcast({ type: 'SYNC_COMMAND', action: 'PAUSE', time: nativePlayer.currentTime });
});
nativePlayer.addEventListener('seeked', () => {
  if (isRemoteEvent || !isHost) return;
  broadcast({ type: 'SYNC_COMMAND', action: nativePlayer.paused ? 'PAUSE' : 'PLAY', time: nativePlayer.currentTime });
});

// Drive mode: host can only "notify" everyone, since an embedded Drive
// preview can't be controlled programmatically (cross-origin iframe).
document.getElementById('btnSyncPlay').addEventListener('click', () => {
  if (!isHost) return;
  playStateBadge.innerText = '▶ Host says: press play!';
  broadcast({ type: 'SYNC_COMMAND', action: 'NOTIFY_PLAY' });
});
document.getElementById('btnSyncPause').addEventListener('click', () => {
  if (!isHost) return;
  playStateBadge.innerText = '⏸ Host says: pause now';
  broadcast({ type: 'SYNC_COMMAND', action: 'NOTIFY_PAUSE' });
});

// ===================== CHAT =====================
function escapeHtml(str) {
  const div = document.createElement('div');
  div.innerText = str;
  return div.innerHTML;
}

document.getElementById('btnSendChat').addEventListener('click', sendChat);
document.getElementById('chatInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') sendChat(); });

function sendChat() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  broadcast({ type: 'CHAT', sender: myName, text });
  appendChatMessage('You', text);
  input.value = '';
}

function appendChatMessage(sender, text) {
  const box = document.getElementById('chatMessages');
  const msg = document.createElement('div');
  msg.className = 'msg';
  msg.innerHTML = `<strong>${escapeHtml(sender)}:</strong> ${escapeHtml(text)}`;
  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}

function appendSystemMessage(text) {
  const box = document.getElementById('chatMessages');
  const msg = document.createElement('div');
  msg.className = 'msg system';
  msg.innerText = `⚡ ${text}`;
  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}

// ===================== APP FLOW =====================
document.getElementById('btnCreateRoom').addEventListener('click', async () => {
  const link = document.getElementById('gdriveLink').value.trim();
  myName = document.getElementById('username').value.trim() || 'Host';
  isHost = true;

  await setupLocalMedia();
  initHostPeer();

  if (!link) {
    roomMode = 'meet';
  } else if (link.includes('drive.google.com')) {
    // Try direct playback first so play/pause/seek can be truly forced for
    // everyone; only drop to the "notify" embed if that direct file fails.
    roomMode = 'native';
    originalDriveLink = link;
    nativePlayer.src = parseGDriveDirectUrl(link);
  } else {
    roomMode = 'native';
    nativePlayer.src = link;
  }
  applyRoomState(getRoomStateSnapshot());

  showTheater();
});

document.getElementById('btnJoinRoom').addEventListener('click', async () => {
  const code = document.getElementById('joinCode').value.trim();
  myName = document.getElementById('username').value.trim() || 'Guest';
  if (!code) return showToast('Please enter a room code.');

  isHost = false;
  await setupLocalMedia();

  document.getElementById('landingPage').classList.add('hidden');
  document.getElementById('waitingPage').classList.remove('hidden');

  initGuestPeer(code);
});

document.getElementById('btnCancelWait').addEventListener('click', () => {
  if (peer) peer.destroy();
  window.location.reload();
});

document.getElementById('btnCopyCode').addEventListener('click', () => {
  const code = document.getElementById('roomCodeDisplay').innerText;
  navigator.clipboard.writeText(code);
  showToast('Room code copied!');
});

document.getElementById('btnLeave').addEventListener('click', () => {
  stopHeartbeat();
  window.location.reload();
});

// Mobile: participants/chat drawer toggle
document.getElementById('btnParticipantsToggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

function showTheater() {
  document.getElementById('landingPage').classList.add('hidden');
  document.getElementById('waitingPage').classList.add('hidden');
  document.getElementById('theaterPage').classList.remove('hidden');
  document.getElementById('localNameTag').innerText = `${myName} (You)`;
  hostBadge.classList.toggle('hidden', !isHost);
  // The host's very first "Set the Scene" click is itself the unlock
  // gesture, so hosts never need the overlay.
  playbackUnlocked = isHost;
  hideUnlockOverlay();
  updateParticipantCount();
}