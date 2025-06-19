window.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('bgm');
  if (audio) {
    audio.volume = 0.6;
    audio.play().catch(() => {});
  }
});

document.querySelectorAll('.footer-btn.line, .footer-btn.fb').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('popup').style.display = 'flex';
  });
});

function switchSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
