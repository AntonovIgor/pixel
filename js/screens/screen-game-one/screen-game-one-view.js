import AbstractView from '../../view.js';
import footer from './../../templates/footer';
import {getHeader} from '../../templates/header';
import {stats} from './../../templates/stats';
import {checkAnswer} from '../../engine/check-answer';

export default class ScreenGameOne extends AbstractView {
  constructor(state, question) {
    super();
    this.state = state;
    this.question = question;
    this.time = state.timer.value;
    this.lives = state.lives;
  }

  get template() {
    const answers = this.question.answers;

    return `
    ${getHeader(this.time, this.lives)}
    <div class="game">
      <p class="game__task">${this.question.question}</p>
      <form class="game__content">
      ${answers.map((answer) => {
    const optIndex = answers.indexOf(answer) + 1;
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
    const gameOptions = Array.from(this.element.querySelectorAll(`.game__option`));
    const buttonBack = this.element.querySelector(`.back`);
    const gameForm = this.element.querySelector(`.game__content`);

    buttonBack.onclick = () => {
      this.onReturnButtonClick();
    };

    gameForm.onchange = () => {
      const checkedOption = gameForm.querySelectorAll(`input[type="radio"]:checked`);
      const answersArray = Array.from(checkedOption).map((answer) => {
        return answer.value;
      });

      if (answersArray.length === gameOptions.length) {
        this.onAnswerClick(checkAnswer(answersArray, this.question));
      }
    };
  }
}
