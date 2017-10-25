import AbstractView from '../../view.js';
import questions from '../../data/fakeQuestions';
import footer from './../../templates/footer';
import {headerTemplate} from './../../templates/header';
import {stats} from './../../templates/stats';

export default class ScreenGameOne extends AbstractView {
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
        <form class="game__content">
        ${[...this.question.answers].map((answer) => {
          const optIndex = this.question.answers.indexOf(answer) + 1;
          return `<div class="game__option">
            <img src="${answer.image.url}" alt="Option ${optIndex}" width="${answer.image.width}" height="${answer.image.height}">
            <label class="game__answer game__answer--photo">
              <input name="question${optIndex}" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer game__answer--paint">
              <input name="question${optIndex}" type="radio" value="painting">
              <span>Рисунок</span>
            </label>
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
    const gameForm = this.element.querySelector(`.game__content`);
    const gameOptions = this.element.querySelectorAll(`.game__option`);
    // const buttonBack = this.element.querySelector(`.back`);
    // buttonBack.onclick = () => showScreen(screenGreeting());

    gameForm.onchange = () => {
      const checkedOption = gameForm.querySelectorAll(`input[type="radio"]:checked`);
      const answersArray = Array.from(checkedOption).map((answer) => {
        return answer.value;
      });

      this.onAnswerSelect(gameOptions, answersArray);
    };
  }
}
