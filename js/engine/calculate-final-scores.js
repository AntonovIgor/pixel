import GAME_DATA from '../data/game-data';
const GAME_SCORES = GAME_DATA.SCORES;
const GAME_TIME = GAME_DATA.ANSWER_TIME;
const GAME_LIVES = GAME_DATA.LIVES;

export const calculateFinalScores = (answersArray, lives) => {
  const answersLength = answersArray.length;
  let scores = 0;

  answersArray.forEach(answer => {
    let timeScores = 0;

    if (answer.isCorrect) {
      if (answer.time < GAME_TIME.FAST) {
        timeScores = GAME_SCORES.FAST;
      } else if (answer.time > GAME_TIME.SLOW) {
        timeScores = GAME_SCORES.SLOW;
      }
      scores += GAME_DATA.SCORES.SUCCESS + timeScores;
    }
  });

  if (lives) {
    if (answersLength < GAME_DATA.ANSWERS_MINIMUM) {
      scores = GAME_SCORES.LOSE;
    } else {
      scores += (GAME_LIVES - lives) * GAME_SCORES.EXTRA;
    }
  } else {
    scores = GAME_SCORES.LOSE;
  }

  return scores;
};