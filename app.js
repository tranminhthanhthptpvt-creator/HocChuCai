// Dữ liệu chuẩn 29 chữ cái Tiếng Việt theo Bộ Giáo dục & Đào tạo
const VIETNAMESE_ALPHABET = [
  { char: 'A a', letter: 'A', phonics: 'A', name: 'A', word: 'Con Cá', icon: '🐟', color: '#ef4444' },
  { char: 'Ă ă', letter: 'Ă', phonics: 'Ă', name: 'Á', word: 'Mặt Trăng', icon: '🌙', color: '#f97316' },
  { char: 'Â â', letter: 'Â', phonics: 'Â', name: 'Ớ', word: 'Cái Cây', icon: '🌳', color: '#f59e0b' },
  { char: 'B b', letter: 'B', phonics: 'Bờ', name: 'Bê', word: 'Quả Bóng', icon: '⚽', color: '#10b981' },
  { char: 'C c', letter: 'C', phonics: 'Cờ', name: 'Xê', word: 'Con Cò', icon: '🦩', color: '#06b6d4' },
  { char: 'D d', letter: 'D', phonics: 'Dờ', name: 'Dê', word: 'Con Dê', icon: '🐐', color: '#3b82f6' },
  { char: 'Đ đ', letter: 'Đ', phonics: 'Đờ', name: 'Đê', word: 'Đồng Hồ', icon: '⏰', color: '#6366f1' },
  { char: 'E e', letter: 'E', phonics: 'E', name: 'E', word: 'Em Bé', icon: '👶', color: '#8b5cf6' },
  { char: 'Ê ê', letter: 'Ê', phonics: 'Ê', name: 'Ê', word: 'Con Ếch', icon: '🐸', color: '#ec4899' },
  { char: 'G g', letter: 'G', phonics: 'Gờ', name: 'Giê', word: 'Con Gà', icon: '🐔', color: '#f43f5e' },
  { char: 'H h', letter: 'H', phonics: 'Hờ', name: 'Hát', word: 'Bông Hoa', icon: '🌸', color: '#fb7185' },
  { char: 'I i', letter: 'I', phonics: 'I', name: 'I ngắn', word: 'Viên Bi', icon: '🔮', color: '#38bdf8' },
  { char: 'K k', letter: 'K', phonics: 'Cờ', name: 'Ca', word: 'Cái Kẹo', icon: '🍬', color: '#a855f7' },
  { char: 'L l', letter: 'L', phonics: 'Lờ', name: 'E-lờ', word: 'Quả Lê', icon: '🍐', color: '#84cc16' },
  { char: 'M m', letter: 'M', phonics: 'Mờ', name: 'Em-mờ', word: 'Con Mèo', icon: '🐱', color: '#eab308' },
  { char: 'N n', letter: 'N', phonics: 'Nờ', name: 'En-nờ', word: 'Ngôi Nhà', icon: '🏠', color: '#f97316' },
  { char: 'O o', letter: 'O', phonics: 'O', name: 'O', word: 'Con Ong', icon: '🐝', color: '#ef4444' },
  { char: 'Ô ô', letter: 'Ô', phonics: 'Ô', name: 'Ô', word: 'Cái Ô', icon: '☂️', color: '#06b6d4' },
  { char: 'Ơ ơ', letter: 'Ơ', phonics: 'Ơ', name: 'Ơ', word: 'Lá Cờ', icon: '🚩', color: '#10b981' },
  { char: 'P p', letter: 'P', phonics: 'Pờ', name: 'Pê', word: 'Đèn Pin', icon: '🔦', color: '#3b82f6' },
  { char: 'Q q', letter: 'Q', phonics: 'Quờ', name: 'Quy', word: 'Quả Cam', icon: '🍊', color: '#f59e0b' },
  { char: 'R r', letter: 'R', phonics: 'Rờ', name: 'E-rờ', word: 'Con Rùa', icon: '🐢', color: '#10b981' },
  { char: 'S s', letter: 'S', phonics: 'Sờ', name: 'Ét', word: 'Ngôi Sao', icon: '⭐', color: '#eab308' },
  { char: 'T t', letter: 'T', phonics: 'Tờ', name: 'Tê', word: 'Con Tàu', icon: '🚢', color: '#6366f1' },
  { char: 'U u', letter: 'U', phonics: 'U', name: 'U', word: 'Cái Mũ', icon: '🧢', color: '#38bdf8' },
  { char: 'Ư ư', letter: 'Ư', phonics: 'Ư', name: 'Ư', word: 'Con Hươu', icon: '🦌', color: '#84cc16' },
  { char: 'V v', letter: 'V', phonics: 'Vờ', name: 'Vê', word: 'Con Voi', icon: '🐘', color: '#ec4899' },
  { char: 'X x', letter: 'X', phonics: 'Xờ', name: 'Ích', word: 'Xe Đạp', icon: '🚲', color: '#14b8a6' },
  { char: 'Y y', letter: 'Y', phonics: 'I', name: 'I dài', word: 'Y Tá', icon: '👩‍⚕️', color: '#a855f7' }
];

let currentIndex = 0;
let remainingIndices = [];
let soundEnabled = true;
let isSpeaking = false;
let audioCtx = null;

// Khởi tạo Audio Context cho hiệu ứng âm thanh pop/chime
function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Phát âm thanh chime vui tai khi đổi chữ
function playChimeSound() {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch (e) {
    // Bỏ qua nếu trình duyệt chặn Web Audio
  }
}

// Tìm giọng đọc tiếng Việt tối ưu nhất
let viVoice = null;
function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  const voices = window.speechSynthesis.getVoices();
  viVoice = voices.find(v => v.lang.toLowerCase().replace('_', '-').includes('vi-vn') || v.lang.toLowerCase().startsWith('vi')) || null;
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();
}

// Phát âm tiếng Việt chuẩn bằng Web Speech API
function speak(text) {
  if (!soundEnabled || !('speechSynthesis' in window)) return;

  try {
    window.speechSynthesis.cancel(); // Hủy câu đang đọc dở nếu có

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.85; // Tốc độ vừa phải, rõ ràng cho trẻ em
    utterance.pitch = 1.05; // Cao độ nhẹ nhàng, ấm áp

    if (viVoice) {
      utterance.voice = viVoice;
    }

    isSpeaking = true;
    utterance.onend = () => { isSpeaking = false; };
    utterance.onerror = () => { isSpeaking = false; };

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn('Lỗi SpeechSynthesis:', err);
  }
}

// Lấy nội dung phát âm theo chế độ đã chọn
function getSpokenText(item) {
  const mode = document.getElementById('voice-mode').value;
  if (mode === 'phonics') {
    return item.phonics;
  } else if (mode === 'name') {
    return item.name;
  } else if (mode === 'word') {
    return `${item.phonics}. ${item.word}`;
  }
  return item.phonics;
}

// Cập nhật giao diện chữ cái
function renderLetter(index, shouldSpeak = true) {
  currentIndex = index;
  const item = VIETNAMESE_ALPHABET[index];

  const letterEl = document.getElementById('letters');
  const tagEl = document.getElementById('pronounce-tag');
  const wordBadge = document.getElementById('word-badge');
  const wordIcon = document.getElementById('word-icon');
  const wordText = document.getElementById('word-text');

  // Hiệu ứng chuyển động mượt
  letterEl.classList.remove('active');
  letterEl.classList.add('inactive');

  setTimeout(() => {
    letterEl.textContent = item.char;
    letterEl.style.color = item.color;
    letterEl.style.textShadow = `0 8px 32px rgba(0,0,0,0.5), 0 0 50px ${item.color}66`;

    const mode = document.getElementById('voice-mode').value;
    let label = 'Âm: ' + item.phonics;
    if (mode === 'name') label = 'Tên chữ: ' + item.name;
    else if (mode === 'word') label = `${item.phonics} - ${item.word}`;
    tagEl.textContent = label;

    wordIcon.textContent = item.icon;
    wordText.textContent = item.word;

    letterEl.classList.remove('inactive');
    letterEl.classList.add('active');

    // Cập nhật thanh danh sách 29 chữ cái
    updateAlphabetPills();

    playChimeSound();

    if (shouldSpeak) {
      setTimeout(() => {
        speak(getSpokenText(item));
      }, 80);
    }
  }, 120);
}

// Chuyển tới chữ cái tiếp theo
function nextLetter() {
  const orderMode = document.getElementById('order-mode').value;

  if (orderMode === 'random') {
    if (remainingIndices.length === 0) {
      // Làm mới danh sách ngẫu nhiên
      remainingIndices = VIETNAMESE_ALPHABET.map((_, i) => i).filter(i => i !== currentIndex);
      shuffleArray(remainingIndices);
    }
    const nextIdx = remainingIndices.pop();
    renderLetter(nextIdx);
  } else {
    const nextIdx = (currentIndex + 1) % VIETNAMESE_ALPHABET.length;
    renderLetter(nextIdx);
  }
}

// Lùi về chữ cái trước đó
function prevLetter() {
  const prevIdx = (currentIndex - 1 + VIETNAMESE_ALPHABET.length) % VIETNAMESE_ALPHABET.length;
  renderLetter(prevIdx);
}

// Xáo trộn mảng
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Render thanh 29 chữ cái ở cuối trang
function initAlphabetGrid() {
  const grid = document.getElementById('alphabet-grid');
  grid.innerHTML = '';

  VIETNAMESE_ALPHABET.forEach((item, index) => {
    const pill = document.createElement('button');
    pill.className = 'letter-pill';
    pill.id = `pill-${index}`;
    pill.textContent = item.letter;
    pill.title = `Chữ ${item.letter} (${item.phonics})`;

    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      renderLetter(index, true);
    });

    grid.appendChild(pill);
  });

  updateAlphabetPills();
}

function updateAlphabetPills() {
  document.querySelectorAll('.letter-pill').forEach((pill, idx) => {
    if (idx === currentIndex) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });
}

// Thiết lập các sự kiện tương tác
document.addEventListener('DOMContentLoaded', () => {
  initAlphabetGrid();
  renderLetter(0, false); // Hiển thị chữ A đầu tiên mà không tự phát trước khi người dùng tương tác

  const mainArea = document.getElementById('main-area');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnSpeak = document.getElementById('btn-speak');
  const btnSound = document.getElementById('btn-sound');
  const wordBadge = document.getElementById('word-badge');
  const voiceMode = document.getElementById('voice-mode');

  // Chạm vào vùng chính để chuyển chữ tiếp theo & phát âm
  mainArea.addEventListener('click', (e) => {
    // Không chuyển nếu bấm trúng nút mũi tên, nút nghe lại hoặc từ vựng
    if (e.target.closest('#btn-prev') || e.target.closest('#btn-next') || e.target.closest('#btn-speak') || e.target.closest('#word-badge')) {
      return;
    }
    nextLetter();
  });

  // Nút lùi / tiến
  btnPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    prevLetter();
  });

  btnNext.addEventListener('click', (e) => {
    e.stopPropagation();
    nextLetter();
  });

  // Nút nghe lại
  btnSpeak.addEventListener('click', (e) => {
    e.stopPropagation();
    playChimeSound();
    speak(getSpokenText(VIETNAMESE_ALPHABET[currentIndex]));
  });

  // Bấm vào huy hiệu từ vựng để đọc từ minh họa
  wordBadge.addEventListener('click', (e) => {
    e.stopPropagation();
    const item = VIETNAMESE_ALPHABET[currentIndex];
    playChimeSound();
    speak(`${item.word}`);
  });

  // Bật/Tắt âm thanh
  btnSound.addEventListener('click', (e) => {
    e.stopPropagation();
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
      btnSound.classList.remove('muted');
      btnSound.querySelector('.btn-icon').textContent = '🔊';
      btnSound.querySelector('.btn-text').textContent = 'Bật tiếng';
      speak('Bật âm thanh');
    } else {
      btnSound.classList.add('muted');
      btnSound.querySelector('.btn-icon').textContent = '🔇';
      btnSound.querySelector('.btn-text').textContent = 'Tắt tiếng';
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    }
  });

  // Khi thay đổi chế độ phát âm
  voiceMode.addEventListener('change', () => {
    const item = VIETNAMESE_ALPHABET[currentIndex];
    const mode = voiceMode.value;
    let label = 'Âm: ' + item.phonics;
    if (mode === 'name') label = 'Tên chữ: ' + item.name;
    else if (mode === 'word') label = `${item.phonics} - ${item.word}`;
    document.getElementById('pronounce-tag').textContent = label;
    speak(getSpokenText(item));
  });

  // Hỗ trợ phím bàn phím
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'SELECT') return;

    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      nextLetter();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevLetter();
    } else if (e.key.toLowerCase() === 'r') {
      e.preventDefault();
      speak(getSpokenText(VIETNAMESE_ALPHABET[currentIndex]));
    }
  });
});
