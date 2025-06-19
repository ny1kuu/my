window.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('bgm');
  if (audio) {
    audio.volume = 0.6;
    // 嘗試自動播放
    audio.play().catch(function(){});
    // 若自動播放失敗，點擊任意處後播放
    document.body.addEventListener('click', function playAudioOnce() {
      audio.play();
      document.body.removeEventListener('click', playAudioOnce);
    });
  }
});
document.querySelectorAll('.footer-btn.line, .footer-btn.fb').forEach(btn => {
  btn.addEventListener('click', function(e) {
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
let currentCard = 0;
function slideCard(direction) {
  const cards = document.querySelectorAll('#work .carousel-card');
  const totalCards = cards.length;
  cards[currentCard].style.display = 'none';
  currentCard = (currentCard + direction + totalCards) % totalCards;
  cards[currentCard].style.display = 'block';
}
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('#work .carousel-card');
  cards.forEach((card, index) => {
    card.style.display = index === 0 ? 'block' : 'none';
  });
});
let currentHomeCard = 0;
function slideHomeCard(direction) {
  const cards = document.querySelectorAll('#home-carousel .carousel-card');
  const totalCards = cards.length;
  cards[currentHomeCard].style.display = 'none';
  currentHomeCard = (currentHomeCard + direction + totalCards) % totalCards;
  cards[currentHomeCard].style.display = 'block';
}
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('#home-carousel .carousel-card');
  cards.forEach((card, index) => {
    card.style.display = index === 0 ? 'block' : 'none';
  });
});
