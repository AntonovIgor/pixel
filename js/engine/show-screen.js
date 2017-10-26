const mainBox = document.querySelector(`main.central`);

export const showScreen = (view) => {
  mainBox.innerHTML = ``;
  mainBox.appendChild(view.element);
};
