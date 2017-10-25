import ScreenGameThree from '../screen-game-three/screen-game-three-view';
import {showScreen} from './../../engine/show-screen';
import {setGameScreen} from './../../engine/set-game-screen';
import {checkAnswer} from './../../engine/check-answer';
import {calculateAnswerTime} from './../../engine/calculate-answer-time';
import {updateGameState} from './../../engine/update-game-state';
import {setQuestionToAsk} from './../../engine/set-question-to-ask';
import {checkAnswerTime} from './../../engine/check-answer-time';
import questions from './../../data/fakeQuestions';

export default (state, question) => {
  const screenGameThree = new ScreenGameThree(state, question);

  screenGameThree.onAnswerClick = (state, answersArray) => {
    const answer = {
      isCorrect: checkAnswer(answersArray, question),
      time: calculateAnswerTime()
    };
    state.stats.push(checkAnswerTime(answer));
    const newState = updateGameState(state, answer);
    showScreen(setGameScreen(newState, setQuestionToAsk(questions, newState.questionIndex)));
  };

  return screenGameThree;
};
