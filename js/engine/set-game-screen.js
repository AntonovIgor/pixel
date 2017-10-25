import GAME_DATA from '../data/game-data';
import screenGameOne from '../screens/screen-game-one/screen-game-one';
import screenGameTwo from '../screens/screen-game-two/screen-game-two';
import screenGameThree from '../screens/screen-game-three/screen-game-three';
import screenStats from '../screens/screen-stats/screen-stats';

export const setGameScreen = (state, question) => {
  const newState = Object.assign({}, state);
  let screen;
  if (newState.lives >= 0) {
    if (question) {
      const gameType = question.type;
      if (gameType === GAME_DATA.GAME_TYPE.TWO_OF_TWO) {
        screen = screenGameOne(question, newState);
      } else if (gameType === GAME_DATA.GAME_TYPE.TINDER_LIKE) {
        screen = screenGameTwo(question, newState);
      } else if (gameType === GAME_DATA.GAME_TYPE.ONE_OF_THREE) {
        screen = screenGameThree(question, newState);
      }
    } else {
      screen = screenStats(newState);
    }
  } else {
    screen = screenStats(newState);
  }
  return screen;
};
