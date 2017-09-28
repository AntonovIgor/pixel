let mainBox = document.querySelector('main.central');
let screensArray = Array.from(document.querySelectorAll('template'));
let screens = [];

screensArray.forEach(screenTemplate => {
  screens.push(screenTemplate.innerHTML);
});

let showScreen = screenNumber => {
  mainBox.innerHTML = screens[screenNumber];
};

let index = 0;
showScreen(index);

document.addEventListener(`keydown`, (e) => {
  if (e.altKey && e.keyCode === 37) {
    if (index > 0) {
      index--;
    } else {
      index = screens.length - 1;
    }
    showScreen(index);
  }
  if (e.altKey && e.keyCode === 39) {
    if (index < screens.length - 1) {
      index++;
    } else {
      index = 0;
    }
    showScreen(index);
  }
});


