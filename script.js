const audio = document.getElementById("loveSong");
const playButton = document.getElementById("playButton");
const musicToggle = document.getElementById("musicToggle");
const musicToggleText = document.getElementById("musicToggleText");
const trackStatus = document.getElementById("trackStatus");
const toast = document.getElementById("toast");
const heartsLayer = document.getElementById("floatingHearts");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function updateMusicUI(playing) {
  document.body.classList.toggle("music-playing", playing);
  playButton.textContent = playing ? "Ⅱ" : "▶";
  playButton.setAttribute("aria-label", playing ? "Jeda lagu" : "Putar lagu");
  musicToggle.setAttribute("aria-pressed", String(playing));
  musicToggleText.textContent = playing ? "Jeda lagu kita" : "Putar lagu kita";
  trackStatus.textContent = playing ? "Sedang diputar ♡" : "Tekan play untuk memulai";
}

async function toggleMusic() {
  if (audio.paused) {
    try {
      await audio.play();
      updateMusicUI(true);
    } catch (error) {
      showToast("Tambahkan file music/lagu-kita.mp3 terlebih dahulu ya ♡");
      updateMusicUI(false);
    }
  } else {
    audio.pause();
    updateMusicUI(false);
  }
}

playButton.addEventListener("click", toggleMusic);
musicToggle.addEventListener("click", toggleMusic);
audio.addEventListener("ended", () => updateMusicUI(false));
audio.addEventListener("pause", () => updateMusicUI(false));
audio.addEventListener("play", () => updateMusicUI(true));

function createHeart({ burst = false } = {}) {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = ["♡", "♥", "ღ", "✧"][Math.floor(Math.random() * 4)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${14 + Math.random() * (burst ? 28 : 14)}px`;
  heart.style.animationDuration = `${burst ? 2.4 + Math.random() * 2 : 5 + Math.random() * 5}s`;
  heart.style.opacity = `${0.35 + Math.random() * 0.55}`;
  heartsLayer.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}

function heartBurst(count = 28) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => createHeart({ burst: true }), i * 45);
  }
}

setInterval(() => createHeart(), 950);

document.getElementById("openSurprise").addEventListener("click", () => {
  heartBurst(36);
  document.getElementById("memories").scrollIntoView({ behavior: "smooth" });
  showToast("Kejutan kecil untuk Ayangg dimulai... ♡");
});

document.getElementById("revealSecret").addEventListener("click", (event) => {
  const message = document.getElementById("secretMessage");
  const button = event.currentTarget;
  message.hidden = false;
  message.classList.remove("reveal");
  void message.offsetWidth;
  message.classList.add("reveal");
  button.textContent = "Pesan terbuka ♡";
  button.disabled = true;
  button.style.opacity = ".7";
  heartBurst(32);
});

document.getElementById("moreHearts").addEventListener("click", () => {
  heartBurst(55);
  showToast("Peluk virtual terkirim untuk Ayangg! ♥");
});

// Fade in content as it enters the viewport.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section-heading, .memory-card, .letter, .song-card, .secret-card").forEach(el => observer.observe(el));
