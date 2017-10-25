import GAME_DATA from '../data/game-data';

const GAME_SCORES = GAME_DATA.SCORES;

export const calculateFinalScores = (answersArray, lives) => {
  const answersLength = answersArray.length;
  let scores = 0;
  answersArray.forEach((answer) => {
    let timeScores = 0;

    if (answersLength && answer !== GAME_DATA.ANSWER.WRONG) {
      if (answer === GAME_DATA.ANSWER.FAST) {
        timeScores = GAME_SCORES.FAST;
      } else if (answer === GAME_DATA.ANSWER.SLOW) {
        timeScores = GAME_SCORES.SLOW;
      }
      scores += GAME_DATA.SCORES.SUCCESS + timeScores;
    }
  });

  return ((lives >= 0) && answersLength === GAME_DATA.ANSWERS_MINIMUM) ?
    scores + lives * GAME_SCORES.EXTRA : GAME_SCORES.LOSE;
};
