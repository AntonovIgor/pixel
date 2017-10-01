/**
 * Created by Cannibal on 01.10.2017.
 */
export const showScreen = screen => {
  const mainBox = document.querySelector('main.central');
  mainBox.innerHTML = ``;
  mainBox.appendChild(screen);
};
