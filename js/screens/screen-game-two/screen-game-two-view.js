import AbstractView from '../../view.js';
import questions from '../../data/fakeQuestions';
import footer from './../../templates/footer';
import {headerTemplate} from './../../templates/header';
import headerLogo from './../../templates/logo-button';
import {stats} from './../../templates/stats';

export default class ScreenGameTwo extends AbstractView {
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
      <form class="game__content  game__content--wide">
       ${[...this.question.answers].map((answer) => {
        const optIndex = this.question.answers.indexOf(answer) + 1;
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
    this.element.querySelector(`.header`).appendChild(headerLogo().element);
    const gameForm = this.element.querySelector(`.game__content`);
    // const buttonBack = screenGameTwo.querySelector(`.back`);
    gameForm.onchange = () => {
      const checkedOption = gameForm.querySelectorAll(`input[type="radio"]:checked`);
      const answersArray = Array.from(checkedOption).map((answer) => {
        return answer.value;
      });
      this.onChangeForm(answersArray, this.state);
    };
  }
}
