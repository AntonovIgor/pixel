import GAME_DATA from '../data/game-data';
import questions from '../data/fakeQuestions';

export const stats = (gameStats) => {
  return `<ul class="stats">
  ${gameStats.map((answer) => {
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
    ${new Array(questions.length - gameStats.length)
      .fill(`<li class="stats__result stats__result--unknown"></li>`)
      .join(``)}
  </ul>`;
};
