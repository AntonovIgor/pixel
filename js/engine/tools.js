import {setGameScreen} from '../engine/set-game-screen';
import {showScreen} from '../engine/show-screen';

export const startNewGame = () => {
  const welcome = setGameScreen(`welcome`);
  showScreen(welcome);
};

export const startGuessArtistGame = (state) => {
  const levelArtist = setGameScreen(`artist`, state);
  showScreen(levelArtist);
};

export const startGuessGenreGame = (state) => {
  const levelGenre = setGameScreen(`genre`, state);
  showScreen(levelGenre);
};

export const endGameWin = (state) => {
  const resultWin = setGameScreen(`win`, state);
  showScreen(resultWin);
};

export const endGameFail = (state) => {
  const resultFail = setGameScreen(`fail`, state);
  showScreen(resultFail);
};
