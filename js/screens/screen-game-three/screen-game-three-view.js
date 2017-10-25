import AbstractView from '../../view.js';
import questions from '../../data/fakeQuestions';
import footer from './../../templates/footer';
import {headerTemplate} from './../../templates/header';
import {stats} from './../../templates/stats';
import GAME_DATA from './../../data/game-data';

export default class ScreenGameThree extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.question = questions[this.state.questionIndex];
  }

  get template() {
    return `<header class="header">
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
      ${headerTemplate(this.state)}
    </header>
    <div class="game">
      <p class="game__task">${question.question}</p>
      <form class="game__content  game__content--triple">    
      ${[...this.question.answers].map((answer) => {
        return `<div class="game__option">
          <img src="${answer.image.url}" alt="Option 1" width="${answer.image.width}" height="${answer.image.height}">
        </div>`;
      }).join(``)}
      </form>
      <div class="stats">
        ${stats(this.state.stats)}
      </div>
    </div>
    ${footer}`.trim();
  }

  bind() {
    const gameOptions = Array.from(this.element.querySelectorAll(`.game__option`));
    // const buttonBack = this.element.querySelector(`.back`);

    gameOptions.forEach((option) => {
      option.onclick = () => {
        option.classList.add(`game__option--selected`);
        const answersArray = gameOptions.map((opt) => {
          return (opt.classList.contains(`game__option--selected`)) ? GAME_DATA.ANSWER_TYPE.PHOTO : GAME_DATA.ANSWER_TYPE.PAINTING;
        });
        this.onAnswerClick(this.state, answersArray);
      };
    });
  }
}
