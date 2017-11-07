import AbstractView from '../../view.js';
import footer from './../../templates/footer';
import GAME_DATA from './../../data/game-data';

export default class ScreenIntroView extends AbstractView {

  get template() {
    return `<div id="main" class="central__content">
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup>${GAME_DATA.INTRO_TEXT}</p>
      </div>
    </div>
    ${footer}`;
  }

  bind() {
    const continueButton = this.element.querySelector(`.intro__asterisk`);

    continueButton.onclick = () => {
      this.onContinueButtonClick();
    };
  }
}
