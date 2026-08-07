/* ════════════════════════════════════════════
   SVG PIECE DEFINITIONS  (inline — no CDN needed, always visible)
════════════════════════════════════════════ */
var SVG_PIECES = {
  wK: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5" stroke-width="2" stroke-linecap="square"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#fff" stroke-linejoin="miter"/><path d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V17s.5-1.5-2.5-1.5-3 1.5-3 1.5v6.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7" fill="#fff"/><path d="M12.5 30c5.5-3 14.5-3 20 0M12.5 33.5c5.5-3 14.5-3 20 0M12.5 37c5.5-3 14.5-3 20 0"/></g></svg>',
  wQ: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14l2 12z" stroke-linejoin="miter"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c4-1.5 17-1.5 21 0" fill="none"/><circle cx="6" cy="12" r="2"/><circle cx="14" cy="9" r="2"/><circle cx="22.5" cy="8" r="2"/><circle cx="31" cy="9" r="2"/><circle cx="39" cy="12" r="2"/></g></svg>',
  wR: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5" stroke-linejoin="miter"/><path d="M34 14l-3 3H14l-3-3"/><path d="M31 17v12.5H14V17" stroke-linejoin="miter"/><path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/><path d="M11 14h23" fill="none" stroke-linejoin="miter"/></g></svg>',
  wB: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#fff" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/></g><path d="M17.5 26h10M15 30h15" fill="none" stroke="#000" stroke-width="1.5"/></g></svg>',
  wN: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#fff"/><path d="M24 18c.38 5.12-4.5 6.9-6.5 8-.5.3-1.5 1-1.5 1-9.5 3.5-4.5 11.5-5.5 14v-4c-1.5-4-4.5-4-4.5-4-1.5-1 0-3.5 1-3.5.5 0 1 1 2 0 0-1-1-5.5-5-7-4-1.5-2.5 5 .5 6 .5.5 2 1.5 2 3.5s-3 3.5-3 3.5c1.5 4.5 8 2 8 2 2 .5 4.5 2 6.5 4 1.5 2 3 6 5 7.5" fill="#fff"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" fill="#000"/><path d="M14.933 15.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 0 1 .866.5z" fill="#000"/></g></svg>',
  wP: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38-1.95 1.12-3.28 3.21-3.28 5.62 0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></svg>',
  bK: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6" stroke-linejoin="miter"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#000" stroke-linejoin="miter"/><path d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V17s.5-1.5-2.5-1.5-3 1.5-3 1.5v6.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7" fill="#000"/><path d="M20 8h5" stroke-linejoin="miter" stroke="#fff" stroke-width="2"/><path d="M32 29.5s8.5-4 6-9.5c-5-9-13.5-6.5-15.5 0V17" stroke="#fff" fill="none"/><path d="M12.5 30c5.5-3 14.5-3 20 0M12.5 33.5c5.5-3 14.5-3 20 0M12.5 37c5.5-3 14.5-3 20 0" stroke="#fff"/></g></svg>',
  bQ: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14l2 12z" stroke-linejoin="miter"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c4-1.5 17-1.5 21 0" fill="none" stroke="#fff" stroke-width="1"/><circle cx="6" cy="12" r="2"/><circle cx="14" cy="9" r="2"/><circle cx="22.5" cy="8" r="2"/><circle cx="31" cy="9" r="2"/><circle cx="39" cy="12" r="2"/></g></svg>',
  bR: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 36v-4h21v4H12z" stroke-linejoin="miter"/><path d="M14 29.5v-13h17v13H14z"/><path d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z" stroke-linejoin="miter"/><path d="M12 35.5h21M13 31.5h19" fill="none" stroke="#fff" stroke-width="1"/></g></svg>',
  bB: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#000" stroke-linecap="butt"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/></g><path d="M17.5 26h10M15 30h15" fill="none" stroke="#fff" stroke-width="1"/></g></svg>',
  bN: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><g fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill="#000"/><path d="M24 18c.38 5.12-4.5 6.9-6.5 8-.5.3-1.5 1-1.5 1-9.5 3.5-4.5 11.5-5.5 14v-4c-1.5-4-4.5-4-4.5-4-1.5-1 0-3.5 1-3.5.5 0 1 1 2 0 0-1-1-5.5-5-7-4-1.5-2.5 5 .5 6 .5.5 2 1.5 2 3.5s-3 3.5-3 3.5c1.5 4.5 8 2 8 2 2 .5 4.5 2 6.5 4 1.5 2 3 6 5 7.5" fill="#000"/><path d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" fill="#fff"/><path d="M14.933 15.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 0 1 .866.5z" fill="#fff"/><path d="M24.55 10.4l-.45 1.45.5.15c3.15 1 5.65 2.49 6.9 3.75 1.25 1.27 1.35 2.35.85 3.25-.5.9-1.66 1.73-2.8 2.26l.5 1.67.8-.26c1.63-.52 3.05-1.55 3.81-3.04.3-.6.45-1.24.44-1.92-.02-1.64-1.13-3.3-2.97-4.51-1.84-1.22-4.43-2.04-7.08-2.85z" fill="#fff" stroke="none"/></g></svg>',
  bP: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38-1.95 1.12-3.28 3.21-3.28 5.62 0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#000" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></svg>',
};

/* Unicode fallback for captured piece display */
var UNICODE = {
  wK:'♔',wQ:'♕',wR:'♖',wB:'♗',wN:'♘',wP:'♙',
  bK:'♚',bQ:'♛',bR:'♜',bB:'♝',bN:'♞',bP:'♟'
};

/* Board themes */
var THEMES = {
  classic: { light:'#eedab8', dark:'#8a6240' },
  ocean:   { light:'#d4e8f0', dark:'#4a7fa8' },
  forest:  { light:'#d8e8c8', dark:'#4a7a50' },
  night:   { light:'#c8c8d8', dark:'#484868' },
};
var currentTheme = 'classic';

/* ════════════════════════════════════════════
   MULTIPLAYER STATE  (WebRTC peer-to-peer via PeerJS)
════════════════════════════════════════════ */
var MP = {
  active:false,          // true once an online game has started
  mode:'local',           // 'local' | 'create' | 'join' | 'random'
  peer:null,
  conn:null,
  isHost:false,
  myColor:'w',
  myName:'Player',
  oppName:'Opponent',
  roomCode:null,
  quickPool:['ocx-table-1','ocx-table-2','ocx-table-3','ocx-table-4','ocx-table-5','ocx-table-6'],
  onMessage:null          // current message router — swapped during handshake
};

function genRoomCode(){
  var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  var s = '';
  for(var i=0;i<6;i++) s += chars[Math.floor(Math.random()*chars.length)];
  return s;
}
function roomIdFromCode(code){ return 'ocx-room-' + code.toLowerCase(); }

function showToast(msg){
  var $t = $('#mpToast');
  $t.text(msg).addClass('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(function(){ $t.removeClass('show'); }, 2800);
}

function updateConnBadge(state, text){
  var $b = $('#connBadge').removeClass('hidden online offline');
  if(state) $b.addClass(state);
  $('#connBadgeText').text(text);
}

/* ---- overlay helpers ---- */
function showMPOverlay(opts){
  opts = opts || {};
  $('#mpSpinner').toggle(opts.spinner !== false);
  $('#mpOvTitle').text(opts.title || 'Connecting…');
  $('#mpOvSub').text(opts.sub || '');
  if(opts.code){ $('#mpCodeDisplay').text(opts.code).removeClass('hidden'); }
  else { $('#mpCodeDisplay').addClass('hidden'); }
  $('#mpBtnCopy').toggleClass('hidden', !opts.showCopy);
  $('#mpOverlay').addClass('show');
}
function hideMPOverlay(){ $('#mpOverlay').removeClass('show'); }

/* ---- peer connection plumbing ---- */
function sendMsg(msg){
  if(MP.conn && MP.conn.open) MP.conn.send(msg);
}

function teardownMP(){
  MP.active = false;
  if(currentCall){ try{ currentCall.close(); }catch(e){} }
  endVoiceChatUI();
  stopLocalMic();
  if(MP.conn){ try{ MP.conn.close(); }catch(e){} MP.conn = null; }
  if(MP.peer){ try{ MP.peer.destroy(); }catch(e){} MP.peer = null; }
  MP.onMessage = null;
  updateConnBadge('', 'Local game');
  $('#connBadge').addClass('hidden');
  $('#btnChat, #btnVoice, #btnMute').addClass('hidden');
  resetChat();
}

function attachDataHandlers(conn){
  conn.on('data', function(msg){ if(MP.onMessage) MP.onMessage(msg); });
  conn.on('close', function(){
    updateConnBadge('offline', 'Opponent disconnected');
    if(MP.active){ showToast('Your opponent disconnected.'); appendChatSystem('Opponent disconnected.'); }
    stopClock();
    endVoiceChatUI();
  });
  conn.on('error', function(){
    updateConnBadge('offline', 'Connection error');
  });
}

/* ════════════════════════════════════════════
   TEXT CHAT  (sent over the same PeerJS data channel)
════════════════════════════════════════════ */
function appendChatMsg(name, text, isMe){
  $('#chatMessages .chat-empty').remove();
  var $m = $('<div class="chat-msg">').toggleClass('me', !!isMe);
  $('<span class="chat-msg-name">').text(name).appendTo($m);
  $('<span class="chat-msg-text">').text(text).appendTo($m);
  var $wrap = $('#chatMessages');
  $wrap.append($m);
  $wrap.scrollTop($wrap[0].scrollHeight);
  if(!isMe && !$('#chatPanel').hasClass('show')){
    var n = (parseInt($('#chatBadge').text(),10) || 0) + 1;
    $('#chatBadge').text(n).removeClass('hidden');
    $('#btnChat').addClass('chat-has-unread');
  }
}

function appendChatSystem(text){
  $('#chatMessages .chat-empty').remove();
  var $wrap = $('#chatMessages');
  $wrap.append($('<div class="chat-msg-sys">').text(text));
  $wrap.scrollTop($wrap[0].scrollHeight);
}

function sendChatMessage(){
  var text = $('#chatInput').val().trim();
  if(!text) return;
  if(!MP.active){ $('#chatInput').val(''); return; }
  sendMsg({type:'chat', text:text});
  appendChatMsg(MP.myName, text, true);
  $('#chatInput').val('');
}

function toggleChatPanel(force){
  var show = (typeof force === 'boolean') ? force : !$('#chatPanel').hasClass('show');
  $('#chatPanel').toggleClass('show', show);
  if(show){
    $('#chatBadge').addClass('hidden').text('0');
    $('#btnChat').removeClass('chat-has-unread');
    setTimeout(function(){ $('#chatInput').trigger('focus'); }, 50);
  }
}

function resetChat(){
  $('#chatMessages').html('<div class="chat-empty">No messages yet — say hello!</div>');
  $('#chatBadge').addClass('hidden').text('0');
  $('#btnChat').removeClass('chat-has-unread');
  $('#chatPanel').removeClass('show');
}

/* ════════════════════════════════════════════
   VOICE CHAT  (WebRTC audio call via PeerJS, over the
   same peer-to-peer connection used for the game itself)
════════════════════════════════════════════ */
var localStream = null;
var currentCall = null;
var voiceActive = false;
var micMuted = false;

/* Register once per Peer instance so we can answer an incoming call
   whichever side happens to initiate the voice chat. */
function setupCallHandling(peer){
  peer.on('call', function(call){
    getLocalStream().then(function(stream){
      call.answer(stream);
      bindVoiceCall(call);
      showToast('Voice chat connected.');
    }).catch(function(){
      // Still let the caller's audio come through even if our mic is blocked
      call.answer();
      bindVoiceCall(call);
    });
  });
}

function getLocalStream(){
  if(localStream) return Promise.resolve(localStream);
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
    return Promise.reject(new Error('no-media-devices'));
  }
  return navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){
    localStream = stream;
    return stream;
  });
}

function bindVoiceCall(call){
  currentCall = call;
  call.on('stream', function(remoteStream){
    var audioEl = document.getElementById('remoteAudio');
    audioEl.srcObject = remoteStream;
    var p = audioEl.play();
    if(p && p.catch) p.catch(function(){});
  });
  call.on('close', endVoiceChatUI);
  call.on('error', endVoiceChatUI);
  voiceActive = true;
  updateVoiceUI();
}

function toggleVoiceChat(){
  if(!MP.active || !MP.conn || !MP.peer){
    showToast('Voice chat needs an online opponent.');
    return;
  }
  if(voiceActive){
    if(currentCall){ try{ currentCall.close(); }catch(e){} }
    endVoiceChatUI();
    showToast('Voice chat ended.');
    return;
  }
  $('#btnVoice').prop('disabled', true).html('🎤 Connecting…');
  getLocalStream().then(function(stream){
    var call = MP.peer.call(MP.conn.peer, stream);
    bindVoiceCall(call);
    $('#btnVoice').prop('disabled', false);
    showToast('Voice chat connected.');
  }).catch(function(){
    $('#btnVoice').prop('disabled', false);
    updateVoiceUI();
    showToast('Microphone access is blocked — allow it in your browser settings to use voice chat.');
  });
}

function toggleMute(){
  if(!localStream) return;
  micMuted = !micMuted;
  localStream.getAudioTracks().forEach(function(t){ t.enabled = !micMuted; });
  updateVoiceUI();
}

function endVoiceChatUI(){
  voiceActive = false;
  currentCall = null;
  var audioEl = document.getElementById('remoteAudio');
  if(audioEl) audioEl.srcObject = null;
  updateVoiceUI();
}

function stopLocalMic(){
  if(localStream){
    localStream.getTracks().forEach(function(t){ t.stop(); });
    localStream = null;
  }
  micMuted = false;
}

function updateVoiceUI(){
  $('#btnVoice')
    .toggleClass('voice-live', voiceActive)
    .html(voiceActive ? '📵 End Voice' : '🎤 Voice');
  $('#btnMute')
    .toggleClass('hidden', !voiceActive)
    .toggleClass('mic-muted', micMuted)
    .text(micMuted ? '🔇' : '🎙️');
}

/* Router used once the game is underway (post-handshake) */
function inGameMessageRouter(msg){
  if(!msg || !msg.type) return;
  switch(msg.type){
    case 'move':
      applyRemoteMove(msg);
      break;
    case 'resign':
      if(!gameOver) endGame('Resignation', MP.oppName+' resigned. '+MP.myName+' wins!', MP.myColor, '🏳');
      break;
    case 'draw-offer':
      if(confirm(MP.oppName+' is offering a draw. Accept?')){
        sendMsg({type:'draw-accept'});
        if(!gameOver) endGame('Draw Agreed', 'Both players agreed to a draw.', null, '🤝');
      } else {
        sendMsg({type:'draw-decline'});
      }
      break;
    case 'draw-accept':
      if(!gameOver) endGame('Draw Agreed', 'Both players agreed to a draw.', null, '🤝');
      break;
    case 'draw-decline':
      showToast(MP.oppName+' declined the draw offer.');
      break;
    case 'rematch-request':
      if(confirm(MP.oppName+' wants a rematch. Accept?')){
        sendMsg({type:'rematch-accept'});
        mpRematchReset();
      } else {
        sendMsg({type:'rematch-decline'});
      }
      break;
    case 'rematch-accept':
      mpRematchReset();
      break;
    case 'rematch-decline':
      showToast(MP.oppName+' declined the rematch.');
      break;
    case 'chat':
      appendChatMsg(MP.oppName, msg.text, false);
      break;
  }
}

function mpRematchReset(){
  $('#endOverlay').removeClass('show');
  stopConfetti();
  initGame();
  showToast('Rematch started!');
}

/* Called on the guest side once a 'hello' arrives from the host */
function handleHostHello(msg){
  MP.oppName = msg.name || 'Opponent';
  MP.myColor = msg.hostColor === 'w' ? 'b' : 'w';
  SELECTED_TIME = (typeof msg.timerSecs === 'number') ? msg.timerSecs : SELECTED_TIME;
  sendMsg({type:'hello-ack', name:MP.myName});
  MP.onMessage = inGameMessageRouter;
  hideMPOverlay();
  goToGameMP();
}

/* ---- CREATE ROOM (invite a friend) ---- */
function createRoom(name){
  MP.myName = name; MP.isHost = true; MP.mode = 'create';
  var code = genRoomCode();
  MP.roomCode = code;
  var pid = roomIdFromCode(code);
  showMPOverlay({title:'Room Ready', sub:'Share this code with your friend, or send them the invite link. Waiting for them to join…', code:code, showCopy:true, spinner:true});

  var peer = new Peer(pid, { debug:0 });
  MP.peer = peer;
  setupCallHandling(peer);
  peer.on('connection', function(conn){
    MP.conn = conn;
    conn.on('open', function(){
      attachDataHandlers(conn);
      MP.myColor = 'w'; // host defaults to White in invite mode
      sendMsg({type:'hello', name:MP.myName, hostColor:MP.myColor, timerSecs:SELECTED_TIME});
      MP.onMessage = function(msg){
        if(msg && msg.type === 'hello-ack'){
          MP.oppName = msg.name || 'Opponent';
          MP.onMessage = inGameMessageRouter;
          hideMPOverlay();
          goToGameMP();
        }
      };
    });
  });
  peer.on('error', function(err){
    hideMPOverlay();
    showToast('Could not create room: ' + (err && err.type ? err.type : 'unknown error'));
    teardownMP();
  });
}

/* ---- JOIN ROOM (enter a friend's code) ---- */
function joinRoom(name, code){
  MP.myName = name; MP.isHost = false; MP.mode = 'join';
  code = (code || '').trim().toUpperCase();
  if(!code){ showToast('Enter a room code first.'); return; }
  MP.roomCode = code;
  var pid = roomIdFromCode(code);
  showMPOverlay({title:'Connecting…', sub:'Joining room ' + code + '…', spinner:true});

  var peer = new Peer({ debug:0 });
  MP.peer = peer;
  setupCallHandling(peer);
  peer.on('open', function(){
    var conn = peer.connect(pid, {reliable:true});
    MP.conn = conn;
    var settled = false;
    var timer = setTimeout(function(){
      if(settled) return; settled = true;
      hideMPOverlay();
      showToast('Could not find a room with that code.');
      teardownMP();
    }, 9000);

    conn.on('open', function(){
      if(settled) return; settled = true;
      clearTimeout(timer);
      attachDataHandlers(conn);
      MP.onMessage = function(msg){
        if(msg && msg.type === 'hello') handleHostHello(msg);
      };
    });
    conn.on('error', function(){
      if(settled) return; settled = true;
      clearTimeout(timer);
      hideMPOverlay();
      showToast('Could not find a room with that code.');
      teardownMP();
    });
  });
  peer.on('error', function(err){
    hideMPOverlay();
    showToast('Connection error: ' + (err && err.type ? err.type : 'unknown'));
    teardownMP();
  });
}

/* ---- RANDOM MATCH (public quick-match tables) ---- */
function quickMatch(name){
  MP.myName = name; MP.mode = 'random';
  showMPOverlay({title:'Finding an Opponent…', sub:'Searching open tables for another player.', spinner:true});
  var pool = MP.quickPool.slice().sort(function(){ return Math.random()-0.5; });
  var peer = new Peer({ debug:0 });
  MP.peer = peer;
  setupCallHandling(peer);
  peer.on('open', function(){ tryPoolAsGuest(peer, pool, 0); });
  peer.on('error', function(err){
    hideMPOverlay();
    showToast('Matchmaking error: ' + (err && err.type ? err.type : 'unknown'));
    teardownMP();
  });
}

function tryPoolAsGuest(peer, pool, idx){
  if(idx >= pool.length){ becomeQuickHost(pool[0]); return; }
  var conn = peer.connect(pool[idx], {reliable:true});
  var done = false;
  var timer = setTimeout(function(){
    if(done) return; done = true;
    try{ conn.close(); }catch(e){}
    tryPoolAsGuest(peer, pool, idx+1);
  }, 1800);

  conn.on('open', function(){
    if(done) return; done = true;
    clearTimeout(timer);
    MP.isHost = false;
    MP.conn = conn;
    attachDataHandlers(conn);
    MP.onMessage = function(msg){
      if(msg && msg.type === 'hello') handleHostHello(msg);
    };
  });
  conn.on('error', function(){
    if(done) return; done = true;
    clearTimeout(timer);
    tryPoolAsGuest(peer, pool, idx+1);
  });
}

function becomeQuickHost(tableId){
  showMPOverlay({title:'Waiting for an Opponent…', sub:'You are first in line at the public table. Sit tight — the next player to search will be matched with you.', spinner:true});
  var peer = new Peer(tableId, { debug:0 });
  MP.peer = peer;
  setupCallHandling(peer);
  MP.isHost = true;
  peer.on('connection', function(conn){
    MP.conn = conn;
    conn.on('open', function(){
      attachDataHandlers(conn);
      MP.myColor = Math.random()<0.5 ? 'w' : 'b';
      sendMsg({type:'hello', name:MP.myName, hostColor:MP.myColor, timerSecs:SELECTED_TIME});
      MP.onMessage = function(msg){
        if(msg && msg.type === 'hello-ack'){
          MP.oppName = msg.name || 'Opponent';
          MP.onMessage = inGameMessageRouter;
          hideMPOverlay();
          goToGameMP();
        }
      };
    });
  });
  peer.on('error', function(err){
    if(err && err.type === 'unavailable-id'){
      // someone beat us to this table a moment ago — connect to them as a guest instead
      var p2 = new Peer({debug:0});
      MP.peer = p2;
      setupCallHandling(p2);
      p2.on('open', function(){ tryPoolAsGuest(p2, [tableId], 0); });
      return;
    }
    hideMPOverlay();
    showToast('Matchmaking error: ' + (err && err.type ? err.type : 'unknown'));
    teardownMP();
  });
}

function cancelMPConnect(){
  hideMPOverlay();
  teardownMP();
}

function copyInviteLink(){
  var url = location.origin + location.pathname + '?room=' + encodeURIComponent(MP.roomCode);
  var text = MP.roomCode + '  —  ' + url;
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(function(){ showToast('Invite link copied!'); }).catch(function(){ showToast('Room code: ' + MP.roomCode); });
  } else {
    showToast('Room code: ' + MP.roomCode);
  }
}

/* ---- entering the game once matched ---- */
function goToGameMP(){
  MP.active = true;
  applyTheme(currentTheme);
  $('#landing').addClass('hidden');
  $('#game').removeClass('hidden');
  var wName = MP.myColor === 'w' ? MP.myName : MP.oppName;
  var bName = MP.myColor === 'w' ? MP.oppName : MP.myName;
  $('#ppNameWhite').text(wName + (MP.myColor==='w' ? ' (You)' : ''));
  $('#ppNameBlack').text(bName + (MP.myColor==='b' ? ' (You)' : ''));
  updateConnBadge('online', 'Online · vs ' + MP.oppName);
  resetChat();
  $('#btnChat, #btnVoice').removeClass('hidden');
  initGame();
}

/* ════════════════════════════════════════════
   LANDING LOGIC
════════════════════════════════════════════ */
var SELECTED_TIME = 60;

$(function(){
  // Prefill join code from ?room= link
  try{
    var params = new URLSearchParams(location.search);
    var roomParam = params.get('room');
    if(roomParam){
      $('#lJoinCode').val(roomParam.toUpperCase());
      $('.mode-tab[data-mode="join"]').click();
    }
  }catch(e){}

  // Time option selection
  $('.time-opt').on('click', function(){
    $('.time-opt').removeClass('selected');
    $(this).addClass('selected');
    SELECTED_TIME = parseInt($(this).data('secs')) || 0;
  });

  // Theme selection
  $('.theme-opt').on('click', function(){
    $('.theme-opt').removeClass('selected');
    $(this).addClass('selected');
    currentTheme = $(this).data('theme');
    applyTheme(currentTheme);
  });

  // Mode tab selection
  $('.mode-tab').on('click', function(){
    $('.mode-tab').removeClass('selected');
    $(this).addClass('selected');
    var mode = $(this).data('mode');
    MP.mode = mode;
    $('.mp-panel').removeClass('show');
    if(mode === 'local'){
      $('#panelLocal').addClass('show');
    } else {
      $('#panelYourName').addClass('show');
      if(mode === 'create') $('#panelCreate').addClass('show');
      if(mode === 'join') $('#panelJoin').addClass('show');
      if(mode === 'random') $('#panelRandom').addClass('show');
    }
    var labels = {local:'Begin Game', create:'Create Room & Invite', join:'Join Room', random:'Find Random Opponent'};
    $('#btnPlay').text(labels[mode] || 'Begin Game');
  });

  // Paste room code
  $('#btnPasteCode').on('click', function(){
    if(navigator.clipboard && navigator.clipboard.readText){
      navigator.clipboard.readText().then(function(t){
        var match = (t||'').match(/[A-Z0-9]{6}/i);
        $('#lJoinCode').val(match ? match[0].toUpperCase() : t.trim().toUpperCase());
      }).catch(function(){ showToast('Could not read clipboard — paste manually.'); });
    } else {
      showToast('Clipboard access unavailable — paste manually.');
    }
  });

  // Play button
  $('#btnPlay').on('click', function(){
    if(typeof Peer === 'undefined' && MP.mode !== 'local'){
      showToast('Networking library failed to load. Check your connection and reload.');
      return;
    }
    if(MP.mode === 'local'){
      var wName = $('#lNameWhite').val().trim() || 'White';
      var bName = $('#lNameBlack').val().trim() || 'Black';
      goToGame(wName, bName);
    } else if(MP.mode === 'create'){
      var meC = $('#lNameMe').val().trim() || 'Player 1';
      createRoom(meC);
    } else if(MP.mode === 'join'){
      var meJ = $('#lNameMe').val().trim() || 'Player 2';
      joinRoom(meJ, $('#lJoinCode').val());
    } else if(MP.mode === 'random'){
      var meR = $('#lNameMe').val().trim() || 'Player';
      quickMatch(meR);
    }
  });

  // Overlay buttons
  $('#mpBtnCancel').on('click', cancelMPConnect);
  $('#mpBtnCopy').on('click', copyInviteLink);

  // Game buttons
  $('#btnUndo, #btnUndo2').on('click', undoMove);
  $('#btnResign, #btnResign2').on('click', resign);
  $('#btnMenu, #btnEndMenu').on('click', goToMenu);
  $('#btnNew2').on('click', confirmNewGame);
  $('#btnEndNew').on('click', rematch);

  // Text chat
  $('#btnChat').on('click', function(){ toggleChatPanel(); });
  $('#chatClose').on('click', function(){ toggleChatPanel(false); });
  $('#chatSend').on('click', sendChatMessage);
  $('#chatInput').on('keydown', function(e){
    if(e.key === 'Enter'){ e.preventDefault(); sendChatMessage(); }
  });

  // Voice chat
  $('#btnVoice').on('click', toggleVoiceChat);
  $('#btnMute').on('click', toggleMute);
});

function applyTheme(name){
  var t = THEMES[name] || THEMES.classic;
  document.documentElement.style.setProperty('--light-sq', t.light);
  document.documentElement.style.setProperty('--dark-sq', t.dark);
}

function goToGame(wName, bName){
  applyTheme(currentTheme);
  $('#landing').addClass('hidden');
  $('#game').removeClass('hidden');
  $('#ppNameWhite').text(wName);
  $('#ppNameBlack').text(bName);
  initGame();
}

function goToMenu(){
  if(MP.active || MP.peer){
    if(MP.active && !gameOver && moveHistory.length){
      if(!confirm('Leave this online game? Your opponent will see you disconnect.')) return;
    }
    teardownMP();
  }
  stopClock();
  $('#endOverlay').removeClass('show');
  stopConfetti();
  $('#game').addClass('hidden');
  $('#landing').removeClass('hidden');
}

/* ════════════════════════════════════════════
   GAME STATE
════════════════════════════════════════════ */
var game, board;
var gameOver = false;
var moveHistory = [];
var lastFrom = null, lastTo = null;
var savedNames = { w:'White', b:'Black' };

var clockW = 60, clockB = 60;
var clockInterval = null;

/* ════════════════════════════════════════════
   INIT
════════════════════════════════════════════ */
function initGame(){
  if(board){ board.destroy(); board = null; }
  game = new Chess();
  gameOver = false;
  moveHistory = [];
  lastFrom = null; lastTo = null;
  selectedSquare = null;
  clockW = SELECTED_TIME;
  clockB = SELECTED_TIME;

  savedNames.w = $('#ppNameWhite').text();
  savedNames.b = $('#ppNameBlack').text();

  updateClockUI();
  renderMoveList();
  renderCaptured();
  setStatus('⚪ ' + savedNames.w + ' to move','');

  var cfg = {
    draggable: true,
    position: 'start',
    orientation: (MP.active && MP.myColor === 'b') ? 'black' : 'white',
    pieceTheme: function(piece){ return svgDataUri(piece); },
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd,
    onMouseoverSquare: onMouseoverSquare,
    onMouseoutSquare: onMouseoutSquare,
  };
  board = Chessboard('board', cfg);
  $(window).off('resize.chess').on('resize.chess', function(){ board && board.resize(); });

  if(!MP.active){ $('#connBadge').addClass('hidden'); }
  $('#btnUndo, #btnUndo2').toggle(!MP.active);

  startClock();
}

function svgDataUri(piece){
  var svg = SVG_PIECES[piece];
  if(!svg) return '';
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
}

/* ════════════════════════════════════════════
   CLOCK
════════════════════════════════════════════ */
function startClock(){
  stopClock();
  if(SELECTED_TIME === 0 || gameOver) return;
  clockInterval = setInterval(tick, 1000);
}
function stopClock(){ clearInterval(clockInterval); clockInterval = null; }

function tick(){
  if(gameOver){ stopClock(); return; }
  if(game.turn()==='w'){
    clockW = Math.max(0, clockW-1);
    if(clockW<=0){ updateClockUI(); handleTimeout('w'); return; }
  } else {
    clockB = Math.max(0, clockB-1);
    if(clockB<=0){ updateClockUI(); handleTimeout('b'); return; }
  }
  updateClockUI();
}

function handleTimeout(color){
  if(gameOver) return;
  var winner = color==='w' ? 'b' : 'w';
  endGame('Out of Time ⏰', nameOf(color)+' took too long to move. '+nameOf(winner)+' wins!', winner, '⏰');
}

function updateClockUI(){
  var turn = game.turn();
  $('#clockW').text(fmtClock(clockW));
  $('#clockB').text(fmtClock(clockB));

  var dangerAt = SELECTED_TIME>0 ? Math.max(3, Math.min(10, Math.ceil(SELECTED_TIME/3))) : 0;
  var wDanger = SELECTED_TIME>0 && clockW<=dangerAt && turn==='w';
  var bDanger = SELECTED_TIME>0 && clockB<=dangerAt && turn==='b';
  $('#ppWhite')
    .toggleClass('active', turn==='w' && !gameOver)
    .toggleClass('danger', wDanger);
  $('#ppBlack')
    .toggleClass('active', turn==='b' && !gameOver)
    .toggleClass('danger', bDanger);
}

function fmtClock(s){
  if(SELECTED_TIME===0) return '∞';
  var m=Math.floor(s/60), sec=s%60;
  return (m<10?'0':'')+m+':'+(sec<10?'0':'')+sec;
}

/* ════════════════════════════════════════════
   DRAG / DROP
════════════════════════════════════════════ */
function onDragStart(src, piece){
  if(gameOver || game.game_over()) return false;
  if(game.turn()==='w' && piece.search(/^b/)!==-1) return false;
  if(game.turn()==='b' && piece.search(/^w/)!==-1) return false;
  if(MP.active && piece.search(new RegExp('^'+MP.myColor))===-1) return false;
  // A drag takes over from any tap-to-move selection in progress
  selectedSquare = null;
  clearHL();
}

function onDrop(src, tgt){
  clearHL();
  selectedSquare = null;
  if(src===tgt) return 'snapback';
  if(MP.active && game.turn() !== MP.myColor) return 'snapback';

  // Check promotion
  if(needsPromo(src, tgt)){
    // Temporarily try the move to validate it
    var testMove = game.move({from:src, to:tgt, promotion:'q'});
    if(!testMove){ return 'snapback'; }
    game.undo();

    showPromoModal(game.turn(), function(choice){
      var move = game.move({from:src, to:tgt, promotion:choice});
      if(!move){ board.position(game.fen()); return; }
      afterMove(move, true);
      board.position(game.fen());
    });
    return 'snapback'; // will be corrected after modal
  }

  var move = game.move({from:src, to:tgt, promotion:'q'});
  if(!move) return 'snapback';
  afterMove(move, true);
}

function onSnapEnd(){ board.position(game.fen()); }

/* ════════════════════════════════════════════
   CLICK / TAP TO MOVE
   (Works alongside dragging — essential on mobile,
   where the board only ever receives taps, never hovers.)
════════════════════════════════════════════ */
var selectedSquare = null;

function sqFromEl($el){
  var cls = $el.attr('class') || '';
  var m = cls.match(/(?:^|\s)square-([a-h][1-8])(?:\s|$)/);
  return m ? m[1] : null;
}

function canSelectSquare(sq){
  if(gameOver || !game || game.game_over()) return false;
  var piece = game.get(sq);
  if(!piece) return false;
  if(piece.color !== game.turn()) return false;
  if(MP.active && piece.color !== MP.myColor) return false;
  return true;
}

function selectSquare(sq){
  clearHL();
  var moves = game.moves({square:sq, verbose:true});
  if(!moves.length){ selectedSquare = null; return; }
  selectedSquare = sq;
  $('.square-'+sq).addClass('hl-from');
  moves.forEach(function(m){
    var cls = (m.flags.indexOf('c')!==-1 || m.flags.indexOf('e')!==-1) ? 'hl-ring' : 'hl-dot';
    $('.square-'+m.to).addClass(cls);
  });
}

function deselectSquare(){
  selectedSquare = null;
  clearHL();
}

function tryClickMove(src, tgt){
  if(MP.active && game.turn() !== MP.myColor) return;
  if(needsPromo(src, tgt)){
    var testMove = game.move({from:src, to:tgt, promotion:'q'});
    if(!testMove) return;
    game.undo();
    showPromoModal(game.turn(), function(choice){
      var move = game.move({from:src, to:tgt, promotion:choice});
      if(!move){ board.position(game.fen()); return; }
      afterMove(move, true);
      board.position(game.fen());
    });
    return;
  }
  var move = game.move({from:src, to:tgt, promotion:'q'});
  if(!move) return;
  board.position(game.fen());
  afterMove(move, true);
}

function onSquareClick(sq){
  if(gameOver || !game) return;

  if(selectedSquare){
    if(sq === selectedSquare){ deselectSquare(); return; }

    var moves = game.moves({square:selectedSquare, verbose:true});
    var isLegalTarget = moves.some(function(m){ return m.to === sq; });
    if(isLegalTarget){
      var src = selectedSquare;
      deselectSquare();
      tryClickMove(src, sq);
      return;
    }
    // Clicked a different square — reselect if it's one of our own pieces,
    // otherwise just clear the current selection.
    if(canSelectSquare(sq)){ selectSquare(sq); }
    else{ deselectSquare(); }
    return;
  }

  if(canSelectSquare(sq)){ selectSquare(sq); }
}

/* Delegated so it keeps working after board.destroy()/recreate on rematch */
$(document).on('click', '#board .square-55d63', function(){
  var sq = sqFromEl($(this));
  if(sq) onSquareClick(sq);
});

function afterMove(move, isLocal){
  lastFrom = move.from; lastTo = move.to;
  moveHistory.push(move);
  renderMoveList();
  renderCaptured();
  paintLastMove();
  checkHighlight();
  updateStatus();
  // Per-move timer: every move refills BOTH clocks to the full budget,
  // so the countdown always represents "time left to play the next move".
  if(!gameOver){
    clockW = SELECTED_TIME;
    clockB = SELECTED_TIME;
  }
  updateClockUI();
  startClock();
  if(MP.active && isLocal){
    sendMsg({type:'move', from:move.from, to:move.to, promotion:move.promotion || undefined, clockW:clockW, clockB:clockB});
  }
}

/* Apply a move that arrived from the opponent over the data channel */
function applyRemoteMove(msg){
  if(!game || gameOver) return;
  deselectSquare();
  var mv = game.move({from:msg.from, to:msg.to, promotion:msg.promotion || 'q'});
  if(!mv){ showToast('Move sync issue — board may be out of date.'); return; }
  if(typeof msg.clockW === 'number') clockW = msg.clockW;
  if(typeof msg.clockB === 'number') clockB = msg.clockB;
  board.position(game.fen());
  afterMove(mv, false);
}

function needsPromo(src, tgt){
  var p = game.get(src);
  if(!p || p.type!=='p') return false;
  return (p.color==='w' && tgt[1]==='8') || (p.color==='b' && tgt[1]==='1');
}

/* ════════════════════════════════════════════
   HOVER HIGHLIGHTS
════════════════════════════════════════════ */
function onMouseoverSquare(sq){
  if(gameOver || selectedSquare) return;
  var moves = game.moves({square:sq, verbose:true});
  if(!moves.length) return;
  $('.square-'+sq).addClass('hl-from');
  moves.forEach(function(m){
    var cls = (m.flags.includes('c')||m.flags.includes('e')) ? 'hl-ring' : 'hl-dot';
    $('.square-'+m.to).addClass(cls);
  });
}
function onMouseoutSquare(){ if(!selectedSquare) clearHL(); }
function clearHL(){ $('.square-55d63').removeClass('hl-from hl-dot hl-ring'); }

function paintLastMove(){
  $('.square-55d63').removeClass('hl-lf hl-lt');
  if(lastFrom) $('.square-'+lastFrom).addClass('hl-lf');
  if(lastTo)   $('.square-'+lastTo).addClass('hl-lt');
}

function checkHighlight(){
  $('.square-55d63').removeClass('hl-check');
  if(!game.in_check()) return;
  var turn = game.turn();
  game.board().forEach(function(row,r){
    row.forEach(function(cell,c){
      if(cell && cell.type==='k' && cell.color===turn){
        var sq = String.fromCharCode(97+c) + (8-r);
        $('.square-'+sq).addClass('hl-check');
      }
    });
  });
}

/* ════════════════════════════════════════════
   PROMOTION MODAL
════════════════════════════════════════════ */
var promoCallback = null;
function showPromoModal(color, cb){
  promoCallback = cb;
  var pieces = color==='w'
    ? [{k:'wQ',n:'Queen'},{k:'wR',n:'Rook'},{k:'wB',n:'Bishop'},{k:'wN',n:'Knight'}]
    : [{k:'bQ',n:'Queen'},{k:'bR',n:'Rook'},{k:'bB',n:'Bishop'},{k:'bN',n:'Knight'}];
  var $grid = $('#promoGrid').empty();
  pieces.forEach(function(p){
    var svgSrc = svgDataUri(p.k);
    var $btn = $('<div class="promo-btn">')
      .html('<img src="'+svgSrc+'" class="promo-icon" style="width:40px;height:40px;"><div class="promo-name">'+p.n+'</div>')
      .on('click', function(){
        $('#promoModal').removeClass('show');
        var ch = p.k[1].toLowerCase(); // q r b n
        if(promoCallback) promoCallback(ch);
        promoCallback = null;
      });
    $grid.append($btn);
  });
  $('#promoModal').addClass('show');
}

/* ════════════════════════════════════════════
   STATUS
════════════════════════════════════════════ */
function nameOf(color){ return color==='w' ? savedNames.w : savedNames.b; }

function setStatus(msg, cls){
  $('#statusBar').attr('class','status-bar'+(cls?' '+cls:'')).html(msg);
}

function updateStatus(){
  $('.square-55d63').removeClass('hl-check');

  if(game.in_checkmate()){
    var winner = game.turn()==='w' ? 'b':'w';
    endGame('Checkmate', nameOf(winner)+' wins by checkmate!', winner, '♛');
    return;
  }
  if(game.in_draw()){
    var reason = game.in_stalemate() ? 'Stalemate' :
                 game.in_threefold_repetition() ? 'Threefold Repetition' :
                 game.insufficient_material() ? 'Insufficient Material' : 'Draw';
    endGame(reason, 'The game is a draw!', null, '🤝');
    return;
  }

  var turn = game.turn();
  var icon = turn==='w' ? '⚪':'⚫';
  if(game.in_check()){
    setStatus(icon+' '+nameOf(turn)+' is in <b>Check!</b>', 'check');
    checkHighlight();
  } else {
    setStatus(icon+' '+nameOf(turn)+' to move', '');
  }
}

/* ════════════════════════════════════════════
   MOVE LIST
════════════════════════════════════════════ */
function renderMoveList(){
  var $wrap = $('#moveListWrap');
  if(!moveHistory.length){
    $wrap.html('<div class="no-moves">No moves yet</div>');
    return;
  }
  var html = '';
  for(var i=0;i<moveHistory.length;i+=2){
    var num = Math.floor(i/2)+1;
    var wm = moveHistory[i] ? moveHistory[i].san : '';
    var bm = moveHistory[i+1] ? moveHistory[i+1].san : '';
    var lastIdx = moveHistory.length-1;
    var wCur = (lastIdx===i) ? ' cur':'';
    var bCur = (lastIdx===i+1) ? ' cur':'';
    html += '<div class="move-row">'
      +'<span class="move-num">'+num+'.</span>'
      +'<span class="move-w'+wCur+'">'+wm+'</span>'
      +'<span class="move-b'+bCur+'">'+bm+'</span>'
      +'</div>';
  }
  $wrap.html(html);
  $wrap[0].scrollTop = $wrap[0].scrollHeight;
}

/* ════════════════════════════════════════════
   CAPTURED / MATERIAL
════════════════════════════════════════════ */
var PIECE_VAL = {p:1,n:3,b:3,r:5,q:9,k:0};

function getCaptured(){
  var start = {p:8,n:2,b:2,r:2,q:1};
  var ob = {w:{},b:{}};
  ['p','n','b','r','q','k'].forEach(function(t){ ob.w[t]=0; ob.b[t]=0; });
  game.board().forEach(function(row){ row.forEach(function(c){ if(c) ob[c.color][c.type]++; }); });
  var byB=[],byW=[];
  ['p','n','b','r','q'].forEach(function(t){
    for(var i=0;i<start[t]-ob.w[t];i++) byB.push(t);
    for(var i=0;i<start[t]-ob.b[t];i++) byW.push(t);
  });
  return {byB:byB,byW:byW};
}

function matScore(arr){ return arr.reduce(function(s,t){ return s+PIECE_VAL[t]; },0); }

function renderCaptured(){
  var {byB,byW} = getCaptured();
  var sB = matScore(byB), sW = matScore(byW);
  var diff = sB - sW;
  var $byB = $('#capByBlack').empty();
  byB.forEach(function(t){ $byB.append($('<span>').text(UNICODE['w'+t.toUpperCase()])); });
  if(diff>0) $byB.append($('<span class="mat-adv">').text('+'+diff));
  var $byW = $('#capByWhite').empty();
  byW.forEach(function(t){ $byW.append($('<span>').text(UNICODE['b'+t.toUpperCase()])); });
  if(diff<0) $byW.append($('<span class="mat-adv">').text('+'+(-diff)));
}

/* ════════════════════════════════════════════
   UNDO / RESIGN
════════════════════════════════════════════ */
function undoMove(){
  if(MP.active){ showToast("Undo isn't available in online games."); return; }
  if(gameOver || !moveHistory.length) return;
  deselectSquare();
  game.undo();
  moveHistory.pop();
  if(moveHistory.length){
    lastFrom=moveHistory[moveHistory.length-1].from;
    lastTo=moveHistory[moveHistory.length-1].to;
  } else { lastFrom=null; lastTo=null; }
  board.position(game.fen());
  paintLastMove();
  checkHighlight();
  renderMoveList();
  renderCaptured();
  updateStatus();
  updateClockUI();
}

function resign(){
  if(gameOver) return;
  if(MP.active){
    if(!confirm('Resign this game? '+MP.oppName+' will win.')) return;
    sendMsg({type:'resign'});
    var oppColor = MP.myColor==='w' ? 'b' : 'w';
    endGame('Resignation', MP.myName+' resigned. '+MP.oppName+' wins!', oppColor, '🏳');
    return;
  }
  var cur = game.turn();
  var opp = cur==='w'?'b':'w';
  if(!confirm(nameOf(cur)+' resigns? '+nameOf(opp)+' wins.')) return;
  endGame('Resignation', nameOf(cur)+' resigned. '+nameOf(opp)+' wins!', opp, '🏳');
}

function confirmNewGame(){
  if(MP.active){
    if(!gameOver && moveHistory.length){
      if(!confirm('Abandon current game and offer a rematch?')) return;
    }
    sendMsg({type:'rematch-request'});
    showToast('Rematch offer sent — waiting for ' + MP.oppName + '…');
    return;
  }
  if(gameOver||!moveHistory.length){ rematch(); return; }
  if(confirm('Abandon current game and start new?')) rematch();
}

function rematch(){
  if(MP.active){ sendMsg({type:'rematch-request'}); showToast('Rematch offer sent — waiting for ' + MP.oppName + '…'); return; }
  $('#endOverlay').removeClass('show');
  stopConfetti();
  initGame();
}

/* ════════════════════════════════════════════
   END GAME
════════════════════════════════════════════ */
function endGame(heading, sub, winner, icon){
  gameOver = true;
  stopClock();
  clearHL();

  var cls = (!winner) ? '' : 'checkmate';
  setStatus((winner ? '🏆 ' : '🤝 ') + heading + ' — ' + sub, cls);

  var totalMoves = Math.ceil(moveHistory.length/2);
  $('#esMoves').text(totalMoves);
  $('#esTimeW').text(fmtClock(clockW));
  $('#esTimeB').text(fmtClock(clockB));
  $('#endTrophy').text(icon||'🤝');
  $('#endHeading').text(heading);
  $('#endSubTxt').text(sub);

  $('#endOverlay').addClass('show');
  if(winner) launchConfetti();
}

/* ════════════════════════════════════════════
   CONFETTI
════════════════════════════════════════════ */
var confettiAnim = null;
var cParticles = [];
var cColors = ['#c9a84c','#e8c96a','#ffffff','#4ec98a','#63cdda','#cf6a87','#778beb','#e77f67','#f5e090'];

function CParticle(){
  this.x = Math.random()*window.innerWidth;
  this.y = Math.random()*window.innerHeight*0.35;
  this.r = Math.random()*8+3;
  this.color = cColors[Math.floor(Math.random()*cColors.length)];
  this.vy = Math.random()*3+1;
  this.vx = Math.random()*4-2;
  this.rot = Math.random()*360;
  this.rotv = Math.random()*6-3;
  this.op = 1;
  this.decay = Math.random()*0.006+0.003;
  this.rect = Math.random()>.5;
}
CParticle.prototype.update=function(){ this.x+=this.vx;this.y+=this.vy;this.rot+=this.rotv;this.op-=this.decay; };
CParticle.prototype.draw=function(ctx){
  ctx.save();ctx.globalAlpha=this.op;ctx.fillStyle=this.color;
  ctx.translate(this.x,this.y);ctx.rotate(this.rot*Math.PI/180);
  if(this.rect) ctx.fillRect(-this.r,-this.r/2,this.r*2,this.r);
  else{ctx.beginPath();ctx.arc(0,0,this.r,0,Math.PI*2);ctx.fill();}
  ctx.restore();
};

function launchConfetti(){
  var canvas = document.getElementById('confettiCanvas');
  canvas.width=window.innerWidth;canvas.height=window.innerHeight;
  var ctx=canvas.getContext('2d');
  cParticles=[];
  for(var i=0;i<250;i++) cParticles.push(new CParticle());
  function frame(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    cParticles=cParticles.filter(function(p){ return p.op>0.05&&p.y<canvas.height+30; });
    cParticles.forEach(function(p){ p.update();p.draw(ctx); });
    if(cParticles.length>0) confettiAnim=requestAnimationFrame(frame);
  }
  frame();
}
function stopConfetti(){
  if(confettiAnim){ cancelAnimationFrame(confettiAnim);confettiAnim=null; }
  var c=document.getElementById('confettiCanvas');
  c.getContext('2d').clearRect(0,0,c.width,c.height);
}

window.addEventListener('resize',function(){
  if(confettiAnim){
    var c=document.getElementById('confettiCanvas');
    c.width=window.innerWidth;c.height=window.innerHeight;
  }
});