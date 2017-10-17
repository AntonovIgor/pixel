import {getElementFromTemplate} from './get-element-from-template';
import {showScreen} from './show-screen';
import screenStats from './screen-stats';
import screenGreeting from './screen-greeting';
import footer from './templates/footer';
import {headerTemplate} from './templates/header';
import {initialState} from './data/initialState';
import {stats} from './templates/stats';
import GAME_DATA from './data/game-data';

const templateGameThree = `
  <header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    ${headerTemplate(initialState)}
  </header>
  <div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
    </form>
    <div class="stats">
      ${stats(GAME_DATA)}
    </div>
  </div>
  ${footer}`.trim();

const screenGameThree = getElementFromTemplate(templateGameThree);
const gameOptions = Array.from(screenGameThree.querySelectorAll(`.game__option`));
const buttonBack = screenGameThree.querySelector(`.back`);

buttonBack.onclick = () => showScreen(screenGreeting);

gameOptions.forEach((option) => {
  option.onclick = () => {
    showScreen(screenStats);
  };
});

export default screenGameThree;
