import AbstractView from '../../view.js';
import questions from '../../data/fakeQuestions';
import footer from './../../templates/footer';
import {headerTemplate} from './../../templates/header';
import headerLogo from './../../templates/logo-button';
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
      ${headerTemplate(this.state)}
    </header>
    <div class="game">
      <p class="game__task">${this.question.question}</p>
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
    this.element.querySelector(`.header`).appendChild(headerLogo().element);
    const gameOptions = Array.from(this.element.querySelectorAll(`.game__option`));

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
