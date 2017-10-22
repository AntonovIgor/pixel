import {getElementFromTemplate} from './get-element-from-template';
import {showScreen} from './show-screen';
import screenGreeting from './screen-greeting';
import footer from './templates/footer';
import {headerTemplate} from './templates/header';
import {stats} from './templates/stats';
import {checkAnswer} from './engine/check-answer';
import {calculateAnswerTime} from './engine/calculate-answer-time';
import {updateGameState} from './engine/update-game-state';
import {setGameScreen} from './engine/set-game-screen';
import {setQuestionToAsk} from './engine/set-question-to-ask';
import {checkAnswerTime} from './engine/check-answer-time';
import questions from './data/fakeQuestions';

export default (question, state) => {
  const templateGameTwo = `
  <header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    ${headerTemplate(state)}
  </header>
  <div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
     ${[...question.options].map((option) => {
      const optIndex = question.options.indexOf(option) + 1;
      return `<div class="game__option">
        <img src="${option.source}" alt="Option ${optIndex}" width="${question.width}" height="${question.height}">
        <label class="game__answer  game__answer--photo">
          <input name="question${optIndex}" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question${optIndex}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>`;
    }).join(``)}
    </form>
    <div class="stats">
      ${stats(state)}
    </div>
  </div>
  ${footer}`.trim();

  const screenGameTwo = getElementFromTemplate(templateGameTwo);
  const gameForm = screenGameTwo.querySelector(`.game__content`);
  const buttonBack = screenGameTwo.querySelector(`.back`);

  buttonBack.onclick = () => showScreen(screenGreeting());

  gameForm.onchange = () => {
    const checkedOption = gameForm.querySelectorAll(`input[type="radio"]:checked`);
    const answersArray = Array.from(checkedOption).map(answer => {
      return answer.value;
    });
    const answer = {
      isCorrect: checkAnswer(answersArray, question),
      time: calculateAnswerTime()
    };
    state.answers.push(answer);
    state.stats.push(checkAnswerTime(answer));
    const newState = updateGameState(state, answer);
    showScreen(setGameScreen(newState, setQuestionToAsk(questions, newState.questionIndex)));
  };

  return screenGameTwo;
};
