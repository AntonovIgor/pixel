import AbstractView from '../../view.js';
import footer from './../../templates/footer';
import GAME_DATA from './../../data/game-data';
import {initialState} from './../../data/initialState';

export default class ScreenRules extends AbstractView {

  get template() {
    return `<header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
    </header>
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
    // const buttonBack = this.element.querySelector(`.back`);
    const playerNameField = playForm.querySelector(`.rules__input`);
    const continueButton = playForm.querySelector(`.continue`);

    playerNameField.oninput = () => {
      if (playerNameField.value) {
        continueButton.removeAttribute(`disabled`);
      } else {
        continueButton.setAttribute(`disabled`, `disabled`);
      }
    };

    playForm.onsubmit = () => {
      this.onStartGame(initialState, playerNameField.value);
    };
  }
}
