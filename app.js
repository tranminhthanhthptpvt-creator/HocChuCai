// Dữ liệu chuẩn 29 chữ cái Tiếng Việt theo Bộ Giáo dục & Đào tạo
const VIETNAMESE_ALPHABET = [
  { char: 'A a', letter: 'A', phonics: 'A', name: 'A', word: 'Con Cá', wordHtml: 'Con C<span class="hl-char">á</span>', icon: '🐟', color: '#ef4444' },
  { char: 'Ă ă', letter: 'Ă', phonics: 'Ă', name: 'Á', word: 'Mặt Trăng', wordHtml: 'M<span class="hl-char">ặ</span>t Tr<span class="hl-char">ă</span>ng', icon: '🌙', color: '#f97316' },
  { char: 'Â â', letter: 'Â', phonics: 'Â', name: 'Ớ', word: 'Cái Cây', wordHtml: 'Cái C<span class="hl-char">â</span>y', icon: '🌳', color: '#f59e0b' },
  { char: 'B b', letter: 'B', phonics: 'Bờ', name: 'Bê', word: 'Quả Bóng', wordHtml: 'Quả <span class="hl-char">B</span>óng', icon: '⚽', color: '#10b981' },
  { char: 'C c', letter: 'C', phonics: 'Cờ', name: 'Xê', word: 'Con Cò', wordHtml: '<span class="hl-char">C</span>on <span class="hl-char">C</span>ò', icon: '🦩', color: '#06b6d4' },
  { char: 'D d', letter: 'D', phonics: 'Dờ', name: 'Dê', word: 'Con Dê', wordHtml: 'Con <span class="hl-char">D</span>ê', icon: '🐐', color: '#3b82f6' },
  { char: 'Đ đ', letter: 'Đ', phonics: 'Đờ', name: 'Đê', word: 'Đồng Hồ', wordHtml: '<span class="hl-char">Đ</span>ồng Hồ', icon: '⏰', color: '#6366f1' },
  { char: 'E e', letter: 'E', phonics: 'E', name: 'E', word: 'Em Bé', wordHtml: '<span class="hl-char">E</span>m B<span class="hl-char">é</span>', icon: '👶', color: '#8b5cf6' },
  { char: 'Ê ê', letter: 'Ê', phonics: 'Ê', name: 'Ê', word: 'Con Ếch', wordHtml: 'Con <span class="hl-char">Ế</span>ch', icon: '🐸', color: '#ec4899' },
  { char: 'G g', letter: 'G', phonics: 'Gờ', name: 'Giê', word: 'Con Gà', wordHtml: 'Con <span class="hl-char">G</span>à', icon: '🐔', color: '#f43f5e' },
  { char: 'H h', letter: 'H', phonics: 'Hờ', name: 'Hát', word: 'Bông Hoa', wordHtml: 'Bông <span class="hl-char">H</span>oa', icon: '🌸', color: '#fb7185' },
  { char: 'I i', letter: 'I', phonics: 'I', name: 'I ngắn', word: 'Viên Bi', wordHtml: 'V<span class="hl-char">i</span>ên B<span class="hl-char">i</span>', icon: '🔮', color: '#38bdf8' },
  { char: 'K k', letter: 'K', phonics: 'Cờ', name: 'Ca', word: 'Cái Kẹo', wordHtml: 'Cái <span class="hl-char">K</span>ẹo', icon: '🍬', color: '#a855f7' },
  { char: 'L l', letter: 'L', phonics: 'Lờ', name: 'E-lờ', word: 'Quả Lê', wordHtml: 'Quả <span class="hl-char">L</span>ê', icon: '🍐', color: '#84cc16' },
  { char: 'M m', letter: 'M', phonics: 'Mờ', name: 'Em-mờ', word: 'Con Mèo', wordHtml: 'Con <span class="hl-char">M</span>èo', icon: '🐱', color: '#eab308' },
  { char: 'N n', letter: 'N', phonics: 'Nờ', name: 'En-nờ', word: 'Ngôi Nhà', wordHtml: '<span class="hl-char">N</span>gôi <span class="hl-char">N</span>hà', icon: '🏠', color: '#f97316' },
  { char: 'O o', letter: 'O', phonics: 'O', name: 'O', word: 'Con Ong', wordHtml: 'C<span class="hl-char">o</span>n <span class="hl-char">O</span>ng', icon: '🐝', color: '#ef4444' },
  { char: 'Ô ô', letter: 'Ô', phonics: 'Ô', name: 'Ô', word: 'Cái Ô', wordHtml: 'Cái <span class="hl-char">Ô</span>', icon: '☂️', color: '#06b6d4' },
  { char: 'Ơ ơ', letter: 'Ơ', phonics: 'Ơ', name: 'Ơ', word: 'Lá Cờ', wordHtml: 'Lá C<span class="hl-char">ờ</span>', icon: '🚩', color: '#10b981' },
  { char: 'P p', letter: 'P', phonics: 'Pờ', name: 'Pê', word: 'Đèn Pin', wordHtml: 'Đèn <span class="hl-char">P</span>in', icon: '🔦', color: '#3b82f6' },
  { char: 'Q q', letter: 'Q', phonics: 'Quờ', name: 'Quy', word: 'Quả Cam', wordHtml: '<span class="hl-char">Q</span>uả Cam', icon: '🍊', color: '#f59e0b' },
  { char: 'R r', letter: 'R', phonics: 'Rờ', name: 'E-rờ', word: 'Con Rùa', wordHtml: 'Con <span class="hl-char">R</span>ùa', icon: '🐢', color: '#10b981' },
  { char: 'S s', letter: 'S', phonics: 'Sờ', name: 'Ét', word: 'Ngôi Sao', wordHtml: 'Ngôi <span class="hl-char">S</span>ao', icon: '⭐', color: '#eab308' },
  { char: 'T t', letter: 'T', phonics: 'Tờ', name: 'Tê', word: 'Con Tàu', wordHtml: 'Con <span class="hl-char">T</span>àu', icon: '🚢', color: '#6366f1' },
  { char: 'U u', letter: 'U', phonics: 'U', name: 'U', word: 'Cái Mũ', wordHtml: 'Cái M<span class="hl-char">ũ</span>', icon: '🧢', color: '#38bdf8' },
  { char: 'Ư ư', letter: 'Ư', phonics: 'Ư', name: 'Ư', word: 'Con Hươu', wordHtml: 'Con H<span class="hl-char">ư</span>ơu', icon: '🦌', color: '#84cc16' },
  { char: 'V v', letter: 'V', phonics: 'Vờ', name: 'Vê', word: 'Con Voi', wordHtml: 'Con <span class="hl-char">V</span>oi', icon: '🐘', color: '#ec4899' },
  { char: 'X x', letter: 'X', phonics: 'Xờ', name: 'Ích', word: 'Xe Đạp', wordHtml: '<span class="hl-char">X</span>e Đạp', icon: '🚲', color: '#14b8a6' },
  { char: 'Y y', letter: 'Y', phonics: 'I', name: 'I dài', word: 'Y Tá', wordHtml: '<span class="hl-char">Y</span> Tá', icon: '👩‍⚕️', color: '#a855f7' }
];

let currentIndex = 0;
let remainingIndices = [];
let soundEnabled = true;
let currentAudio = null;
let pauseTimer = null;
let countdownInterval = null;

// Dừng hoàn toàn âm thanh và bộ đếm thời gian đang chạy
function stopAllAudio() {
  if (pauseTimer) {
    clearTimeout(pauseTimer);
    pauseTimer = null;
  }
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
  hidePauseIndicator();
  setWordBadgeSpeaking(false);

  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch (e) {}
    currentAudio = null;
  }
}

// Bật/tắt hiệu ứng đang phát âm từ vựng
function setWordBadgeSpeaking(isSpeaking) {
  const badge = document.getElementById('word-badge');
  if (badge) {
    if (isSpeaking) badge.classList.add('speaking');
    else badge.classList.remove('speaking');
  }
}

// Hiển thị/ẩn trạng thái đếm ngược khoảng ngưng
function showPauseIndicator(secondsLeft) {
  const indicator = document.getElementById('pause-indicator');
  const textEl = document.getElementById('pause-text');
  if (indicator && textEl) {
    indicator.classList.remove('hidden');
    textEl.textContent = `⏳ Đang ngưng ${secondsLeft}s ➔ Chuẩn bị đọc từ minh họa...`;
  }
}

function hidePauseIndicator() {
  const indicator = document.getElementById('pause-indicator');
  if (indicator) {
    indicator.classList.add('hidden');
  }
}

// Phát một tệp âm thanh MP3
function playAudioFile(src, onEnded = null, fallbackText = '') {
  if (!soundEnabled) return;
  stopAllAudio();

  const audio = new Audio(src);
  currentAudio = audio;

  audio.onended = () => {
    if (currentAudio === audio) {
      currentAudio = null;
    }
    if (onEnded) onEnded();
  };

  audio.onerror = () => {
    if (fallbackText) {
      playOnlineTTS(fallbackText, onEnded);
    } else if (onEnded) {
      onEnded();
    }
  };

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(err => {
      console.warn("Autoplay bị chặn cần tương tác:", err);
      if (fallbackText) {
        speakViaSpeechSynthesis(fallbackText);
      }
      if (onEnded) onEnded();
    });
  }
}

// Dự phòng online qua Google TTS
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
    if (onEnded) onEnded();
  };
  audio.play().catch(() => {
    speakViaSpeechSynthesis(text);
    if (onEnded) onEnded();
  });
}

// Dự phòng cuối bằng SpeechSynthesis
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

// Phát âm từ minh họa đơn lẻ
function playWordOnly(index) {
  if (!soundEnabled) return;
  stopAllAudio();
  const item = VIETNAMESE_ALPHABET[index];
  setWordBadgeSpeaking(true);

  playAudioFile(`audio/words/${index}.mp3`, () => {
    setWordBadgeSpeaking(false);
  }, item.word);
}

// Quy trình phát âm chuẩn sư phạm: Đọc Âm ➔ Ngưng một khoảng ➔ Đọc Từ minh họa
function playLetterSequence(index) {
  if (!soundEnabled) return;
  stopAllAudio();

  const item = VIETNAMESE_ALPHABET[index];
  const voiceMode = document.getElementById('voice-mode').value;
  const pauseDuration = parseInt(document.getElementById('pause-duration').value, 10);

  // Xác định file âm thanh chữ (âm đánh vần hay tên chữ)
  const letterAudioSrc = (voiceMode === 'name') ? `audio/names/${index}.mp3` : `audio/phonics/${index}.mp3`;
  const fallbackLetterText = (voiceMode === 'name') ? item.name : item.phonics;

  // Bước 1: Phát âm chữ cái
  playAudioFile(letterAudioSrc, () => {
    // Nếu người dùng tắt đọc từ minh họa
    if (pauseDuration === -1) {
      return;
    }

    // Nếu đọc liền không ngưng (0ms)
    if (pauseDuration === 0) {
      setWordBadgeSpeaking(true);
      playAudioFile(`audio/words/${index}.mp3`, () => {
        setWordBadgeSpeaking(false);
      }, item.word);
      return;
    }

    // Bước 2: Bắt đầu khoảng ngưng đếm ngược
    let secondsLeft = Math.ceil(pauseDuration / 1000);
    showPauseIndicator(secondsLeft);

    countdownInterval = setInterval(() => {
      secondsLeft -= 1;
      if (secondsLeft > 0) {
        showPauseIndicator(secondsLeft);
      } else {
        clearInterval(countdownInterval);
        countdownInterval = null;
      }
    }, 1000);

    // Bước 3: Sau khoảng ngưng, phát âm từ vựng minh họa
    pauseTimer = setTimeout(() => {
      hidePauseIndicator();
      setWordBadgeSpeaking(true);

      playAudioFile(`audio/words/${index}.mp3`, () => {
        setWordBadgeSpeaking(false);
      }, item.word);
    }, pauseDuration);

  }, fallbackLetterText);
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

    const voiceMode = document.getElementById('voice-mode').value;
    let label = (voiceMode === 'name') ? `Tên chữ: ${item.name}` : `Âm: ${item.phonics}`;
    tagEl.textContent = label;

    wordIcon.textContent = item.icon;
    // Chèn HTML có highlight chữ cái trong từ
    wordText.innerHTML = item.wordHtml;

    letterEl.classList.remove('inactive');
    letterEl.classList.add('active');

    updateAlphabetPills();

    if (shouldSpeak) {
      playLetterSequence(index);
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
  const btnSpeakWord = document.getElementById('btn-speak-word');
  const btnSound = document.getElementById('btn-sound');
  const wordBadge = document.getElementById('word-badge');
  const voiceMode = document.getElementById('voice-mode');
  const pauseDuration = document.getElementById('pause-duration');

  // Chạm vào vùng chính để chuyển chữ tiếp theo & phát âm quy trình
  mainArea.addEventListener('click', (e) => {
    if (e.target.closest('#btn-prev') || 
        e.target.closest('#btn-next') || 
        e.target.closest('#btn-speak') || 
        e.target.closest('#btn-speak-word') || 
        e.target.closest('#word-badge')) {
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

  // Nút nghe lại cả quy trình (Âm -> Ngưng -> Từ)
  btnSpeak.addEventListener('click', (e) => {
    e.stopPropagation();
    playLetterSequence(currentIndex);
  });

  // Nút nghe riêng từ minh họa
  btnSpeakWord.addEventListener('click', (e) => {
    e.stopPropagation();
    playWordOnly(currentIndex);
  });

  // Bấm trực tiếp vào thẻ từ vựng để nghe đọc từ minh họa ngay lập tức
  wordBadge.addEventListener('click', (e) => {
    e.stopPropagation();
    playWordOnly(currentIndex);
  });

  // Bật/Tắt âm thanh
  btnSound.addEventListener('click', (e) => {
    e.stopPropagation();
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
      btnSound.classList.remove('muted');
      btnSound.querySelector('.btn-icon').textContent = '🔊';
      btnSound.querySelector('.btn-text').textContent = 'Bật tiếng';
      playLetterSequence(currentIndex);
    } else {
      btnSound.classList.add('muted');
      btnSound.querySelector('.btn-icon').textContent = '🔇';
      btnSound.querySelector('.btn-text').textContent = 'Tắt tiếng';
      stopAllAudio();
    }
  });

  // Thay đổi cách đọc
  voiceMode.addEventListener('change', () => {
    const item = VIETNAMESE_ALPHABET[currentIndex];
    const mode = voiceMode.value;
    let label = (mode === 'name') ? `Tên chữ: ${item.name}` : `Âm: ${item.phonics}`;
    document.getElementById('pronounce-tag').textContent = label;
    playLetterSequence(currentIndex);
  });

  // Thay đổi thời gian ngưng
  pauseDuration.addEventListener('change', () => {
    playLetterSequence(currentIndex);
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
      playLetterSequence(currentIndex);
    } else if (e.key.toLowerCase() === 'w') {
      e.preventDefault();
      playWordOnly(currentIndex);
    }
  });
});
