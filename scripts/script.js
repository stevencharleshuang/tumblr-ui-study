const screens = [...document.querySelectorAll('.screen')];
const firstScreen = document.querySelector('.first-screen');
const secondScreen = document.querySelector('.second-screen');
const thirdScreen = document.querySelector('.third-screen');
const fourthScreen = document.querySelector('.fourth-screen');
const fifthScreen = document.querySelector('.fifth-screen');

let neutralY = 0;
let index;
let prevTargetEl;
let targetEl;

screens.forEach(screen => screen.addEventListener('wheel',  _.throttle(handleWheel, 2000, { leading: true, trailing: true})));

function handleWheel(e) {
  e.stopPropagation();
  index = parseInt(e.target.dataset.num);
  console.log('scroll', index);
  if (e.deltaY > neutralY && index > 0) {
    targetEl = screens[index];
    targetEl.style.top = '-100vh';
    console.log('scroll down');
  } else if (e.deltaY < neutralY && index < 4) {
    index += 1;
    targetEl = screens[index];
    targetEl.style.top = '0';
    console.log('scroll up');
  }
}

