import AbstractView from '../../view.js';
import questions from '../../data/fakeQuestions';
import footer from './../../templates/footer';
import header from './../../templates/header/header';
import {stats} from './../../templates/stats';
import GAME_DATA from './../../data/game-data';

export default class ScreenGameThree extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.question = questions[this.state.questionIndex];
  }

  get template() {
    const answers = this.question.answers;

    return `<header class="header"></header>
    <div class="game">
      <p class="game__task">${this.question.question}</p>
      <form class="game__content  game__content--triple">    
      ${answers.map((answer) => {
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
    const headerElement = this.element.querySelector(`header.header`);
    headerElement.appendChild(header(this.state.time, this.state.lives));
    const gameOptions = Array.from(this.element.querySelectorAll(`.game__option`));

    gameOptions.forEach((option) => {
      option.onclick = () => {
        option.classList.add(`game__option--selected`);
        const answersArray = gameOptions.map((opt) => {
          return (opt.classList.contains(`game__option--selected`)) ? GAME_DATA.ANSWER_TYPE.PHOTO : GAME_DATA.ANSWER_TYPE.PAINTING;
        });
        this.onAnswerClick(answersArray);
      };
    });
  }
}
