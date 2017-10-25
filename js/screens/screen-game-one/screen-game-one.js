import ScreenGameOne from '../screen-game-one/screen-game-one-view';
import {showScreen} from './../../engine/show-screen';
import {setGameScreen} from './../../engine/set-game-screen';
import {checkAnswer} from './../../engine/check-answer';
import {calculateAnswerTime} from './../../engine/calculate-answer-time';
import {updateGameState} from './../../engine/update-game-state';
import {setQuestionToAsk} from './../../engine/set-question-to-ask';
import {checkAnswerTime} from './../../engine/check-answer-time';
import questions from './../../data/fakeQuestions';

export default (question, state) => {
  const screenGameOne = new ScreenGameOne(question, state);

  screenGameOne.onAnswerSelect = (gameOptions, answersArray) => {
    if (answersArray.length === gameOptions.length) {
      const answer = {
        isCorrect: checkAnswer(answersArray, question),
        time: calculateAnswerTime(state)
      };
      state.stats.push(checkAnswerTime(answer));
      const newState = updateGameState(state, answer);
      showScreen(setGameScreen(newState, setQuestionToAsk(questions, newState.questionIndex)));
    }
  };

  return screenGameOne;
};


