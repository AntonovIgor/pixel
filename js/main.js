const mainBox = document.querySelector('main.central');
const screensArray = Array.from(document.querySelectorAll('template'));
let screens = [];

const ARROW_LEFT_KEY = 37;
const ARROW_RIGHT_KEY = 39;

screens = screensArray.map(screenTemplate => {
  return screenTemplate.innerHTML;
});

let lastScreenIndex = screens.length - 1;

const showScreen = screenNumber => mainBox.innerHTML = screens[screenNumber];

let index = 0;
showScreen(index);

document.addEventListener(`keydown`, (e) => {
  if (e.altKey && e.keyCode === ARROW_LEFT_KEY) {
    index = (index > 0) ? --index : lastScreenIndex;
    showScreen(index);
  }
  if (e.altKey && e.keyCode === ARROW_RIGHT_KEY) {
    index = (index < lastScreenIndex) ? ++index : 0;
    showScreen(index);
  }
});


