import AbstractView from './../view.js';

export default class HeaderLogo extends AbstractView {

  get template() {
    return `<header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
    </header>`;
  }

  bind() {
    const buttonBack = this.element.querySelector(`.back`);

    buttonBack.onclick = () => {
      this.onReturnButtonClick();
    };
  }
}
