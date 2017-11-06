import AbstractView from '../../view.js';
import footer from './../../templates/footer';
import GAME_DATA from './../../data/game-data';

export default class ScreenGreetingView extends AbstractView {
  get template() {
    return `<div class="greeting central--blur">
      <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
      <h1 class="greeting__asterisk">*</h1>
      <div class="greeting__challenge">${GAME_DATA.GREETING_TEMPLATE}</div>
      <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
    </div>
    ${footer}`;
  }

  bind() {
    const continueButton = this.element.querySelector(`.greeting__continue`);
    continueButton.onclick = () => {
      this.onContinueButtonClick();
    };
  }
}
