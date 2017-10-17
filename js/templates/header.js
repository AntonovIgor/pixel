import GAME_DATA from '../data/game-data';

export const headerTemplate = (state) => `
    <h1 class="game__timer">${state.time}</h1>
    <div class="game__lives">
      ${new Array(GAME_DATA.LIVES - state.lives)
        .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
        .join(``)}
      ${new Array(state.lives)
        .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
        .join(``)}
    </div>`;
