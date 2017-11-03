import GAME_DATA from '../data/game-data';

export const stats = (answers) => {
  return `<ul class="stats">
  ${answers.map((answer) => {
    if (answer === GAME_DATA.ANSWER.WRONG) {
      return `<li class="stats__result stats__result--wrong"></li>`;
    } else if (answer === GAME_DATA.ANSWER.SLOW) {
      return `<li class="stats__result stats__result--slow"></li>`;
    } else if (answer === GAME_DATA.ANSWER.FAST) {
      return `<li class="stats__result stats__result--fast"></li>`;
    } else if (answer === GAME_DATA.ANSWER.CORRECT) {
      return `<li class="stats__result stats__result--correct"></li>`;
    } else {
      return `<li class="stats__result stats__result--unknown"></li>`;
    }
  }).join(``)}
    ${new Array(GAME_DATA.ANSWERS_MINIMUM - answers.length)
      .fill(`<li class="stats__result stats__result--unknown"></li>`)
      .join(``)}
  </ul>`;
};
