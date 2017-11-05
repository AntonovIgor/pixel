import AbstractView from '../../view.js';
import footer from './../../templates/footer';
import GAME_DATA from './../../data/game-data';
import {getHeader} from '../../templates/header';

export default class ScreenRules extends AbstractView {

  get template() {
    return `
    ${getHeader()}
    <div class="rules">
      ${GAME_DATA.RULES_TEMPLATE}
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>
    ${footer}`;
  }

  bind() {
    const playForm = this.element.querySelector(`.rules__form`);
    const playerNameField = playForm.querySelector(`.rules__input`);
    playerNameField.focus();
    const continueButton = playForm.querySelector(`.continue`);

    const buttonBack = this.element.querySelector(`.back`);

    buttonBack.onclick = () => {
      this.onReturnButtonClick();
    };

    playerNameField.oninput = () => {
      if (playerNameField.value) {
        continueButton.removeAttribute(`disabled`);
      } else {
        continueButton.setAttribute(`disabled`, `disabled`);
      }
    };

    playForm.onsubmit = () => {
      this.onStartGame(playerNameField.value);
    };
  }
}
