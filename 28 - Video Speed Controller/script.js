// ...existing code...

const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');

function handleMove(e) {
  const y = e.pageY - speed.offsetTop;
  const percent = y / speed.offsetHeight;
  const min = 0.4;
  const max = 3.98;
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + '×';
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);
