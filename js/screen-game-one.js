import {getElementFromTemplate} from './get-element-from-template';
import {showScreen} from './show-screen';
import screenGameTwo from './screen-game-two';
import screenGreeting from './screen-greeting';
import footer from './templates/footer';
import {headerTemplate} from './templates/header';
import {initialState} from './data/initialState';
import {stats} from './templates/stats';
import GAME_DATA from './data/game-data';

const templateGameOne = `
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
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      ${stats(GAME_DATA)}
    </div>
  </div>
  ${footer}`.trim();

const screenGameOne = getElementFromTemplate(templateGameOne);
const gameForm = screenGameOne.querySelector(`.game__content`);
const gameOptions = screenGameOne.querySelectorAll(`.game__option`);
const buttonBack = screenGameOne.querySelector(`.back`);

buttonBack.onclick = () => showScreen(screenGreeting);

gameForm.onchange = () => {
  let checkedOption = gameForm.querySelectorAll(`input[type="radio"]:checked`);
  if (checkedOption.length === gameOptions.length) {
    showScreen(screenGameTwo);
  }
};

export default screenGameOne;
