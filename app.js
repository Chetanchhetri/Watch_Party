let peer = null;
let connections = [];
let calls = [];
let localStream = null;
let isHost = false;
let myName = 'User';
let isMicOn = true;
let isCamOn = true;
let isRemoteEvent = false;

// DOM Elements
const nativePlayer = document.getElementById('nativePlayer');
const driveIframe = document.getElementById('driveIframe');
const driveFrameWrap = document.getElementById('driveFrameWrap');
const playStateBadge = document.getElementById('playStateBadge');

// Parse Google Drive Link into standard preview stream embed
function parseGDriveStreamUrl(url) {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return url;
}

// Media Capture Setup
async function setupLocalMedia() {
  try {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    document.getElementById('localVideo').srcObject = localStream;
  } catch (err) {
    console.warn('Camera/Mic permission warning:', err);
    showToast('Media access warning: Running audio/video disabled.');
  }
}

// Toggle Camera Functionality
document.getElementById('btnToggleCam').addEventListener('click', () => {
  if (!localStream) return;
  const track = localStream.getVideoTracks()[0];
  if (track) {
    isCamOn = !isCamOn;
    track.enabled = isCamOn;
    
    const btn = document.getElementById('btnToggleCam');
    btn.className = `control-btn ${isCamOn ? 'active' : 'off'}`;
    btn.querySelector('.lbl').innerText = isCamOn ? 'Cam ON' : 'Cam OFF';
    btn.querySelector('.icon').innerText = isCamOn ? '📹' : '📷';
  }
});

// Toggle Microphone Functionality
document.getElementById('btnToggleMic').addEventListener('click', () => {
  if (!localStream) return;
  const track = localStream.getAudioTracks()[0];
  if (track) {
    isMicOn = !isMicOn;
    track.enabled = isMicOn;

    const btn = document.getElementById('btnToggleMic');
    btn.className = `control-btn ${isMicOn ? 'active' : 'off'}`;
    btn.querySelector('.lbl').innerText = isMicOn ? 'Mic ON' : 'Mic OFF';
    btn.querySelector('.icon').innerText = isMicOn ? '🎙️' : '🔇';

    document.getElementById('localMicTag').innerText = isMicOn ? '🎙️' : '🔇';
    broadcast({ type: 'MEDIA_STATE', sender: myName, mic: isMicOn });
  }
});

// PeerJS Initialization & Mesh Networking
function initPeerConnection(customCode = null) {
  const roomCode = customCode ? customCode.toLowerCase() : Math.random().toString(36).substring(2, 8);
  const fullPeerId = `cinesync-v2-${roomCode}`;

  peer = new Peer(fullPeerId, { debug: 1 });

  peer.on('open', (id) => {
    const displayCode = id.replace('cinesync-v2-', '').toUpperCase();
    document.getElementById('roomCodeDisplay').innerText = displayCode;
  });

  peer.on('connection', (conn) => {
    connections.push(conn);
    bindDataConnection(conn);
    updateParticipantCount();
  });

  peer.on('call', (call) => {
    call.answer(localStream);
    bindMediaCall(call);
  });
}

function bindDataConnection(conn) {
  conn.on('data', (data) => handleIncomingData(data, conn));
  conn.on('close', () => {
    connections = connections.filter(c => c !== conn);
    updateParticipantCount();
  });
}

function bindMediaCall(call) {
  calls.push(call);
  call.on('stream', (remoteStream) => {
    renderRemoteUserVideo(call.peer, remoteStream);
  });
}

function renderRemoteUserVideo(peerId, stream) {
  if (document.getElementById(`card-${peerId}`)) return;

  const grid = document.getElementById('videoGrid');
  const card = document.createElement('div');
  card.className = 'video-card';
  card.id = `card-${peerId}`;

  const video = document.createElement('video');
  video.autoplay = true;
  video.playsinline = true;
  video.srcObject = stream;

  const tag = document.createElement('div');
  tag.className = 'user-tag';
  tag.innerHTML = `<span>Guest</span><span id="mic-${peerId}">🎙️</span>`;

  card.appendChild(video);
  card.appendChild(tag);
  grid.appendChild(card);
  updateParticipantCount();
}

function updateParticipantCount() {
  document.getElementById('participantCount').innerText = connections.length + 1;
}

function broadcast(packet) {
  connections.forEach(conn => {
    if (conn.open) conn.send(packet);
  });
}

// Player Synchronization Engine
function handleIncomingData(data, senderConn) {
  if (data.type === 'SYNC_COMMAND') {
    isRemoteEvent = true;
    playStateBadge.innerText = data.action === 'PLAY' ? '▶ Playing for all' : '⏸ Paused for all';
    
    if (data.action === 'PLAY') {
      nativePlayer.play().catch(() => {});
    } else if (data.action === 'PAUSE') {
      nativePlayer.pause();
    }
    
    if (data.time !== undefined && Math.abs(nativePlayer.currentTime - data.time) > 0.8) {
      nativePlayer.currentTime = data.time;
    }

    setTimeout(() => { isRemoteEvent = false; }, 300);
  }

  if (data.type === 'CHAT') {
    appendChatMessage(data.sender, data.text);
  }

  if (data.type === 'MEDIA_STATE') {
    const micTag = document.getElementById(`mic-${senderConn.peer}`);
    if (micTag) micTag.innerText = data.mic ? '🎙️' : '🔇';
  }

  // Host Relays for multi-peer syncing
  if (isHost) {
    connections.forEach(c => {
      if (c !== senderConn && c.open) c.send(data);
    });
  }
}

// Native Video Controls Hooks
nativePlayer.addEventListener('play', () => {
  if (isRemoteEvent) return;
  broadcast({ type: 'SYNC_COMMAND', action: 'PLAY', time: nativePlayer.currentTime });
});

nativePlayer.addEventListener('pause', () => {
  if (isRemoteEvent) return;
  broadcast({ type: 'SYNC_COMMAND', action: 'PAUSE', time: nativePlayer.currentTime });
});

nativePlayer.addEventListener('seeked', () => {
  if (isRemoteEvent) return;
  broadcast({ type: 'SYNC_COMMAND', action: 'SEEK', time: nativePlayer.currentTime });
});

// Google Drive Sync Overlay Button Event Listeners
document.getElementById('btnSyncPlay').addEventListener('click', () => {
  playStateBadge.innerText = '▶ Playing for all';
  broadcast({ type: 'SYNC_COMMAND', action: 'PLAY' });
});

document.getElementById('btnSyncPause').addEventListener('click', () => {
  playStateBadge.innerText = '⏸ Paused for all';
  broadcast({ type: 'SYNC_COMMAND', action: 'PAUSE' });
});

document.getElementById('btnSyncSeekBack').addEventListener('click', () => {
  broadcast({ type: 'SYNC_COMMAND', action: 'SEEK_REL', offset: -10 });
});

document.getElementById('btnSyncSeekFwd').addEventListener('click', () => {
  broadcast({ type: 'SYNC_COMMAND', action: 'SEEK_REL', offset: 10 });
});

// App Flow Interactivity
document.getElementById('btnCreateRoom').addEventListener('click', async () => {
  const link = document.getElementById('gdriveLink').value.trim();
  myName = document.getElementById('username').value.trim() || 'Host';
  if (!link) return showToast('Enter a valid Google Drive video link');

  isHost = true;
  await setupLocalMedia();
  initPeerConnection();

  if (link.includes('drive.google.com')) {
    driveIframe.src = parseGDriveStreamUrl(link);
    driveFrameWrap.classList.remove('hidden');
    nativePlayer.classList.add('hidden');
  } else {
    nativePlayer.src = link;
    nativePlayer.classList.remove('hidden');
    driveFrameWrap.classList.add('hidden');
  }

  showTheater();
});

document.getElementById('btnJoinRoom').addEventListener('click', async () => {
  const code = document.getElementById('joinCode').value.trim();
  myName = document.getElementById('username').value.trim() || 'Guest';
  if (!code) return showToast('Please enter a room code.');

  await setupLocalMedia();
  
  peer = new Peer();
  peer.on('open', () => {
    const hostPeerId = `cinesync-v2-${code.toLowerCase()}`;
    const conn = peer.connect(hostPeerId);
    
    connections.push(conn);
    bindDataConnection(conn);

    if (localStream) {
      const call = peer.call(hostPeerId, localStream);
      bindMediaCall(call);
    }

    document.getElementById('roomCodeDisplay').innerText = code.toUpperCase();
    showTheater();
  });
});

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
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}

document.getElementById('btnCopyCode').addEventListener('click', () => {
  const code = document.getElementById('roomCodeDisplay').innerText;
  navigator.clipboard.writeText(code);
  showToast('Room Code Copied!');
});

document.getElementById('btnLeave').addEventListener('click', () => {
  window.location.reload();
});

function showTheater() {
  document.getElementById('landingPage').classList.add('hidden');
  document.getElementById('theaterPage').classList.remove('hidden');
  document.getElementById('localNameTag').innerText = `${myName} (You)`;
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3000);
}