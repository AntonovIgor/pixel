export const showScreen = screen => {
  const mainBox = document.querySelector('main.central');
  mainBox.innerHTML = ``;
  mainBox.appendChild(screen);
};
