import AbstractView from './../../view.js';
import GAME_DATA from '../../data/game-data';


export default class Header extends AbstractView {
  constructor(time, lives) {
    super();
    this.time = time;
    this.lives = lives;
  }

  get template() {
    return `<div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
      ${(this.time && this.lives) ?
    `<h1 class="game__timer">${this.time}</h1>
      <div class="game__lives">
        ${new Array(GAME_DATA.LIVES - this.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
        ${new Array(this.lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
      </div>` : ``}
    `;
  }

  bind() {
    const buttonBack = this.element.querySelector(`.back`);

    buttonBack.onclick = () => {
      this.onReturnButtonClick();
    };
  }
}
