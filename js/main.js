const mainBox = document.querySelector('main.central');
const screensArray = Array.from(document.querySelectorAll('template'));
let screens = [];

const ARROW_LEFT_KEY = 37;
const ARROW_RIGHT_KEY = 39;

screensArray.map(screenTemplate => {
  return screens.push(screenTemplate.innerHTML);
});

let lastScreenIndex = screens.length - 1;

const showScreen = screenNumber => mainBox.innerHTML = screens[screenNumber];

let index = 0;
showScreen(index);

document.addEventListener(`keydown`, (e) => {
  if (e.altKey && e.keyCode === ARROW_LEFT_KEY) {
    index = (index > 0) ? index - 1 : lastScreenIndex;
    showScreen(index);
  }
  if (e.altKey && e.keyCode === ARROW_RIGHT_KEY) {
    index = (index < lastScreenIndex) ? index + 1 : 0;
    showScreen(index);
  }
});


