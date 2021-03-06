import GAME_DATA from './../data/game-data';

export const getHeader = (time, lives) => {
  return `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    ${(time && lives >= 0) ?
    `<h1 class="game__timer">${time}</h1>
    <div class="game__lives">
      ${new Array(GAME_DATA.LIVES - lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
      ${new Array(lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
    </div>` : ``}
  </header>`;
};
