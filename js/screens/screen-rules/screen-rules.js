import {getElementFromTemplate} from './../../engine/get-element-from-template';
import {showScreen} from './../../engine/show-screen';
import screenGreeting from './../screen-greeting/screen-greeting';
import footer from './../../templates/footer';
import {initialState} from './../../data/initialState';
import GAME_DATA from './../../data/game-data';
import {setGameScreen} from './../../engine/set-game-screen';
import {setQuestionToAsk} from './../../engine/set-question-to-ask';
import questions from './../../data/fakeQuestions';

export default () => {
  const templateRules = `
  <header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>
  <div class="rules">
    ${GAME_DATA.RULES_TEMPLATE}
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  ${footer}`.trim();

  const screenRules = getElementFromTemplate(templateRules);

  const playForm = screenRules.querySelector(`.rules__form`);
  const playerNameField = playForm.querySelector(`.rules__input`);
  const continueButton = playForm.querySelector(`.continue`);
  const buttonBack = screenRules.querySelector(`.back`);
  buttonBack.onclick = () => showScreen(screenGreeting);

  const state = Object.assign({}, initialState);

  playerNameField.oninput = () => {
    if (playerNameField.value) {
      continueButton.removeAttribute(`disabled`);
    } else {
      continueButton.setAttribute(`disabled`, `disabled`);
    }
  };

  playForm.onsubmit = () => {
    state.playerName = playerNameField.value.trim();
    const questionToAsk = setQuestionToAsk(questions, state.questionIndex);
    showScreen(setGameScreen(state, questionToAsk));
  };

  return screenRules;
};
