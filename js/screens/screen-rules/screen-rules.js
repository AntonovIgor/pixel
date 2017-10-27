import {showScreen} from './../../engine/show-screen';
import ScreenRules from './../screen-rules/screen-rules-view';
import {setGameScreen} from './../../engine/set-game-screen';
import {setQuestionToAsk} from './../../engine/set-question-to-ask';
import questions from './../../data/fakeQuestions';

export default () => {
  const screenRules = new ScreenRules();

  screenRules.onStartGame = (initialState, playerNameField) => {
    const state = Object.assign({}, initialState);
    state.playerName = playerNameField.trim();
    const questionToAsk = setQuestionToAsk(questions, state.questionIndex);
    showScreen(setGameScreen(state, questionToAsk));
  };

  return screenRules;
};
