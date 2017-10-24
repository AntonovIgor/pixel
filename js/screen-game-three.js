import {getElementFromTemplate} from './get-element-from-template';
import {showScreen} from './show-screen';
import screenGreeting from './screen-greeting';
import footer from './templates/footer';
import {headerTemplate} from './templates/header';
import {stats} from './templates/stats';
import {setGameScreen} from './engine/set-game-screen';
import {checkAnswer} from './engine/check-answer';
import {calculateAnswerTime} from './engine/calculate-answer-time';
import {updateGameState} from './engine/update-game-state';
import {setQuestionToAsk} from './engine/set-question-to-ask';
import {checkAnswerTime} from './engine/check-answer-time';
import questions from './data/fakeQuestions';
import GAME_DATA from './data/game-data';

export default (question, state) => {
  const templateGameThree = `
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
    <p class="game__task">${question.question}</p>
    <form class="game__content  game__content--triple">    
    ${[...question.answers].map((answer) => {
    return `<div class="game__option">
        <img src="${answer.image.url}" alt="Option 1" width="${answer.image.width}" height="${answer.image.height}">
      </div>`;
  }).join(``)}
    </form>
    <div class="stats">
      ${stats(state.stats)}
    </div>
  </div>
  ${footer}`.trim();

  const screenGameThree = getElementFromTemplate(templateGameThree);
  const gameOptions = Array.from(screenGameThree.querySelectorAll(`.game__option`));
  const buttonBack = screenGameThree.querySelector(`.back`);

  buttonBack.onclick = () => showScreen(screenGreeting());

  gameOptions.forEach((option) => {
    option.onclick = () => {
      option.classList.add(`game__option--selected`);

      const answersArray = gameOptions.map((opt) => {
        return (opt.classList.contains(`game__option--selected`)) ? GAME_DATA.ANSWER_TYPE.PHOTO : GAME_DATA.ANSWER_TYPE.PAINTING;
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
  });

  return screenGameThree;
};
