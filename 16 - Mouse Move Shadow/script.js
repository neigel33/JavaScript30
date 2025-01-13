const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // Increased from 100 to 500 for more dramatic movement

hero.addEventListener('mousemove', shadow);

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2)) * 1.5;
  const yWalk = Math.round((y / height * walk) - (walk / 2)) * 1.5;

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,0,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,0,0.7),
    ${xWalk}px ${yWalk * -1}px 0 rgba(0,0,255,0.7),
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(255,255,0,0.7)
  `;
}


