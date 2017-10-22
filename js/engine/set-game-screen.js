import GAME_DATA from '../data/game-data';
import screenGameOne from '../screen-game-one';
import screenGameTwo from '../screen-game-two';
import screenGameThree from '../screen-game-three';
import screenStats from '../screen-stats';

export const setGameScreen = (state, question) => {
  const newState = Object.assign({}, state);
  let screen;
  if (newState.lives > 0) {
    if (question) {
      const gameType = question.type;
      if (gameType === GAME_DATA.GAME_TYPE.GUESS_EACH) {
        screen = screenGameOne(question, newState);
      } else if (gameType === GAME_DATA.GAME_TYPE.GUESS_WIDE) {
        screen = screenGameTwo(question, newState);
      } else if (gameType === GAME_DATA.GAME_TYPE.GUESS_TRIPLE) {
        screen = screenGameThree(question, newState);
      }
    } else {
      screen = screenStats(newState);
    }
  } else {
    screen = screenStats(newState);
  }

  console.log(newState);
  return screen;
};
