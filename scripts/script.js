const screens = document.querySelectorAll('.screen');

screens.forEach(screen => screen.addEventListener('wheel', handleWheel));

function handleWheel() {
  console.log('scroll');
}

