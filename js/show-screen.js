const mainBox = document.querySelector('main.central');

export const showScreen = screen => {
  mainBox.innerHTML = ``;
  mainBox.appendChild(screen);
};
