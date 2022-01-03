const wrapper = document.querySelector('.wrapper');
let count = 0;
const ANI_MAX_TIME = 30;
const ANI_MIN_TIME = 20;
const DELAY_MAX = 10;
const DELAY_MIN = 2;

const addSnow = () => {
  const snowsize = [4, 4, 4, 4, 4, 4, 6, 6, 8];
  const snow = document.createElement('span');
  const size = snowsize[Math.random() * snowsize.length];
  snow.classList.add('snow');
  snow.style.width = `${size}px`;
  snow.style.height = `${size}px`;
  snow.style.borderRadius = `${size / 2}px`;
  snow.style.left = `${Math.floor(Math.random() * (window.innerWidth + 1))}px`;
  snow.style.animationDuration = `${Math.floor(Math.random() * (ANI_MAX_TIME - ANI_MIN_TIME) + ANI_MIN_TIME)}s`;
  snow.style.animationDuration = `${Math.floor(Math.random() * (DELAY_MAX - DELAY_MIN) + DELAY_MIN)}s`;
  wrapper.appendChild(snow);

  if (count < 300) {
    ++count;
    window.requestAnimationFrame(addSnow);
  }
}

addSnow();
