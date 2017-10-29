import {showScreen} from './../engine/show-screen';
import {setGameScreen} from './../engine/set-game-screen';
import {checkAnswer} from './../engine/check-answer';
import {updateGameState} from './../engine/update-game-state';
import {setQuestionToAsk} from './../engine/set-question-to-ask';
import {checkAnswerTime} from './../engine/check-answer-time';
import questions from './../data/fakeQuestions';

export const showNextScreen = (state, timer, answerTime, answersArray, question) => {
  clearInterval(timer);
  const answer = {
    isCorrect: checkAnswer(answersArray, question),
    time: answerTime
  };
  state.stats.push(checkAnswerTime(answer));
  const newState = updateGameState(state, answer);
  showScreen(setGameScreen(newState, setQuestionToAsk(questions, newState.questionIndex)));
};
