import AbstractView from '../../view.js';
import footer from './../../templates/footer';
import GAME_DATA from './../../data/game-data';
import headerLogo from './../../templates/logo-button';
import {initialState} from './../../data/initialState';

export default class ScreenRules extends AbstractView {

  get template() {
    return `<header class="header">
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
    this.element.querySelector(`.header`).appendChild(headerLogo().element);
    const playForm = this.element.querySelector(`.rules__form`);
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
