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
let currentAudio = null;
let wordTimeout = null;

// Dừng âm thanh hiện tại nếu đang phát
function stopCurrentAudio() {
  if (wordTimeout) {
    clearTimeout(wordTimeout);
    wordTimeout = null;
  }
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch (e) {}
    currentAudio = null;
  }
}

// Phát file âm thanh MP3 với dự phòng tự động
function playAudioFile(src, onEnded = null, fallbackText = '') {
  if (!soundEnabled) return;
  stopCurrentAudio();

  const audio = new Audio(src);
  currentAudio = audio;

  audio.onended = () => {
    if (currentAudio === audio) {
      currentAudio = null;
    }
    if (onEnded) onEnded();
  };

  audio.onerror = () => {
    // Dự phòng 1: Nếu file cục bộ lỗi, thử gọi trực tiếp link Google TTS
    if (fallbackText) {
      playOnlineTTS(fallbackText, onEnded);
    }
  };

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(err => {
      console.warn("Trình duyệt tạm dừng autoplay, cần tương tác người dùng:", err);
      if (fallbackText) {
        speakViaSpeechSynthesis(fallbackText);
      }
    });
  }
}

// Dự phòng trực tuyến qua Google TTS
function playOnlineTTS(text, onEnded = null) {
  if (!soundEnabled) return;
  const encoded = encodeURIComponent(text);
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encoded}`;
  
  const audio = new Audio(url);
  currentAudio = audio;
  audio.onended = () => {
    if (currentAudio === audio) currentAudio = null;
    if (onEnded) onEnded();
  };
  audio.onerror = () => {
    speakViaSpeechSynthesis(text);
  };
  audio.play().catch(() => {
    speakViaSpeechSynthesis(text);
  });
}

// Dự phòng cuối cùng bằng Web Speech API nếu offline hoàn toàn và không có file
function speakViaSpeechSynthesis(text) {
  if (!soundEnabled || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'vi-VN';
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  } catch (e) {}
}

// Phát âm thanh của chữ cái theo chế độ được chọn
function playLetterAudio(index) {
  if (!soundEnabled) return;
  const item = VIETNAMESE_ALPHABET[index];
  const mode = document.getElementById('voice-mode').value;

  if (mode === 'phonics') {
    // Phát âm đánh vần: A, Ă, Â, Bờ, Cờ...
    playAudioFile(`audio/phonics/${index}.mp3`, null, item.phonics);
  } else if (mode === 'name') {
    // Phát âm tên chữ: Bê, Xê, Dê, Đê...
    playAudioFile(`audio/names/${index}.mp3`, null, item.name);
  } else if (mode === 'word') {
    // Phát âm chữ trước, sau đó phát âm từ vựng ví dụ
    playAudioFile(`audio/phonics/${index}.mp3`, () => {
      wordTimeout = setTimeout(() => {
        playAudioFile(`audio/words/${index}.mp3`, null, item.word);
      }, 250);
    }, item.phonics);
  }
}

// Cập nhật giao diện chữ cái
function renderLetter(index, shouldSpeak = true) {
  currentIndex = index;
  const item = VIETNAMESE_ALPHABET[index];

  const letterEl = document.getElementById('letters');
  const tagEl = document.getElementById('pronounce-tag');
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

    if (shouldSpeak) {
      playLetterAudio(index);
    }
  }, 100);
}

// Chuyển tới chữ cái tiếp theo
function nextLetter() {
  const orderMode = document.getElementById('order-mode').value;

  if (orderMode === 'random') {
    if (remainingIndices.length === 0) {
      remainingIndices = VIETNAMESE_ALPHABET.map((_, i) => i).filter(i => i !== currentIndex);
      shuffleArray(remainingIndices);
    }
    const nextIdx = remainingIndices.pop();
    renderLetter(nextIdx, true);
  } else {
    const nextIdx = (currentIndex + 1) % VIETNAMESE_ALPHABET.length;
    renderLetter(nextIdx, true);
  }
}

// Lùi về chữ cái trước đó
function prevLetter() {
  const prevIdx = (currentIndex - 1 + VIETNAMESE_ALPHABET.length) % VIETNAMESE_ALPHABET.length;
  renderLetter(prevIdx, true);
}

// Xáo trộn mảng
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Khởi tạo thanh 29 chữ cái
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
  renderLetter(0, false); // Hiển thị chữ A đầu tiên

  const mainArea = document.getElementById('main-area');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnSpeak = document.getElementById('btn-speak');
  const btnSound = document.getElementById('btn-sound');
  const wordBadge = document.getElementById('word-badge');
  const voiceMode = document.getElementById('voice-mode');

  // Chạm vào vùng chính để chuyển chữ tiếp theo & phát âm
  mainArea.addEventListener('click', (e) => {
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
    playLetterAudio(currentIndex);
  });

  // Bấm vào từ vựng để nghe phát âm từ đó
  wordBadge.addEventListener('click', (e) => {
    e.stopPropagation();
    const item = VIETNAMESE_ALPHABET[currentIndex];
    playAudioFile(`audio/words/${currentIndex}.mp3`, null, item.word);
  });

  // Bật/Tắt âm thanh
  btnSound.addEventListener('click', (e) => {
    e.stopPropagation();
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
      btnSound.classList.remove('muted');
      btnSound.querySelector('.btn-icon').textContent = '🔊';
      btnSound.querySelector('.btn-text').textContent = 'Bật tiếng';
      playLetterAudio(currentIndex);
    } else {
      btnSound.classList.add('muted');
      btnSound.querySelector('.btn-icon').textContent = '🔇';
      btnSound.querySelector('.btn-text').textContent = 'Tắt tiếng';
      stopCurrentAudio();
    }
  });

  // Thay đổi chế độ đọc
  voiceMode.addEventListener('change', () => {
    const item = VIETNAMESE_ALPHABET[currentIndex];
    const mode = voiceMode.value;
    let label = 'Âm: ' + item.phonics;
    if (mode === 'name') label = 'Tên chữ: ' + item.name;
    else if (mode === 'word') label = `${item.phonics} - ${item.word}`;
    document.getElementById('pronounce-tag').textContent = label;
    playLetterAudio(currentIndex);
  });

  // Phím tắt bàn phím
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
      playLetterAudio(currentIndex);
    }
  });
});
