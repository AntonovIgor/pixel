import AbstractView from '../../view.js';
import questions from '../../data/fakeQuestions';
import footer from './../../templates/footer';
import {getHeader} from '../../templates/header';
import {stats} from './../../templates/stats';
import {checkAnswer} from '../../engine/check-answer';

export default class ScreenGameTwo extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.question = questions[this.state.questionIndex];
    this.time = state.timer.value;
    this.lives = state.lives;
  }

  get template() {
    const answers = this.question.answers;

    return `
    ${getHeader(this.time, this.lives)}
    <div class="game">
      <p class="game__task">${this.question.question}</p>
      <form class="game__content  game__content--wide">
       ${answers.map((answer) => {
    const optIndex = answers.indexOf(answer) + 1;
    return `<div class="game__option">
          <img src="${answer.image.url}" alt="Option ${optIndex}" width="${answer.image.width}" height="${answer.image.height}">
          <label class="game__answer  game__answer--photo">
            <input name="question${optIndex}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
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
    const buttonBack = this.element.querySelector(`.back`);

    buttonBack.onclick = () => {
      this.onReturnButtonClick();
    };

    const gameForm = this.element.querySelector(`.game__content`);

    gameForm.onchange = () => {
      const checkedOption = gameForm.querySelectorAll(`input[type="radio"]:checked`);
      const answersArray = Array.from(checkedOption).map((answer) => {
        return answer.value;
      });
      this.onAnswerClick(checkAnswer(answersArray, this.question));
    };
  }
}
