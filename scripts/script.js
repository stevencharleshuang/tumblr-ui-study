const screens = [...document.querySelectorAll('.screen')];
const firstScreen = document.querySelector('.first-screen');
const secondScreen = document.querySelector('.second-screen');
const thirdScreen = document.querySelector('.third-screen');
const fourthScreen = document.querySelector('.fourth-screen');
const fifthScreen = document.querySelector('.fifth-screen');

let neutralY = 0;
let prevIndex;

screens.forEach(screen => screen.addEventListener('wheel', handleWheel));

function handleWheel(e) {
  let target = parseInt(e.target.dataset.num);
  let targetEl = screens[target];
  let prevTargetEl = screens[prevIndex];
  console.log('scroll', target, targetEl, prevTargetEl);
  if (target > 0 && target <= 4) {
    if (e.deltaY > neutralY) {
      prevIndex = target;
      targetEl.style.top = '-100vh';
      console.log('scroll down', prevIndex);
    } else if (e.deltaY < neutralY) {
      console.log('scroll up');
      prevIndex = target;
      prevTargetEl.style.top = '0';
    }
  }
}

