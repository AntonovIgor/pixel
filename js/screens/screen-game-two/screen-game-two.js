import {showScreen} from './../../engine/show-screen';
import ScreenGameTwo from './../screen-game-two/screen-game-two-view';
import {checkAnswer} from './../../engine/check-answer';
import {calculateAnswerTime} from './../../engine/calculate-answer-time';
import {updateGameState} from './../../engine/update-game-state';
import {setGameScreen} from './../../engine/set-game-screen';
import {setQuestionToAsk} from './../../engine/set-question-to-ask';
import {checkAnswerTime} from './../../engine/check-answer-time';
import questions from './../../data/fakeQuestions';

export default (state, question) => {
  const screenGameTwo = new ScreenGameTwo(state, question);

  screenGameTwo.onChangeForm = (answersArray, state) => {
    const answer = {
      isCorrect: checkAnswer(answersArray, question),
      time: calculateAnswerTime()
    };
    state.stats.push(checkAnswerTime(answer));
    const newState = updateGameState(state, answer);
    showScreen(setGameScreen(newState, setQuestionToAsk(questions, newState.questionIndex)));
  };

  return screenGameTwo;
};
