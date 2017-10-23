import {calculateFinalScores} from './calculate-final-scores';

export const updateGameState = (state, asnwer) => {
  const newState = Object.assign({}, state);
  if (asnwer.isCorrect) {
    newState.scores = calculateFinalScores(newState.answers, newState.lives);
  } else {
    newState.lives--;
  }
  newState.questionIndex++;
  return newState;
};
