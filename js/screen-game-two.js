import {getElementFromTemplate} from './get-element-from-template';
import {showScreen} from './show-screen';
import screenGameThree from './screen-game-three';
import screenGreeting from './screen-greeting';
import footer from './templates/footer';
import {headerTemplate} from './templates/header';
import {initialState} from './data/initialState';
import {stats} from './templates/stats';
import GAME_DATA from './data/game-data';

const templateGameTwo = `
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
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      ${stats(GAME_DATA)}
    </div>
  </div>
  ${footer}`.trim();

const screenGameTwo = getElementFromTemplate(templateGameTwo);
const gameForm = screenGameTwo.querySelector(`.game__content`);
const buttonBack = screenGameTwo.querySelector(`.back`);

buttonBack.onclick = () => showScreen(screenGreeting);

gameForm.onchange = () => {
  showScreen(screenGameThree);
};

export default screenGameTwo;
