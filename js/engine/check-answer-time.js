import GAME_DATA from '../data/game-data';

const GAME_TIME = GAME_DATA.ANSWER_TIME;

export const checkAnswerTime = (answer) => {
  if (answer.isCorrect) {
    if (answer.time < GAME_TIME.FAST) {
      return GAME_DATA.ANSWER.FAST;
    } else if (answer.time > GAME_TIME.SLOW) {
      return GAME_DATA.ANSWER.SLOW;
    } else {
      return GAME_DATA.ANSWER.CORRECT;
    }
  } else {
    return GAME_DATA.ANSWER.WRONG;
  }
};
