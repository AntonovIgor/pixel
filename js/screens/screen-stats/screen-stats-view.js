import AbstractView from '../../view.js';
import footer from './../../templates/footer';
import {getHeader} from '../../templates/header';
import {stats} from './../../templates/stats';
import GAME_DATA from './../../data/game-data';
import {calculateFinalScores} from './../../engine/calculate-final-scores';

const GAME_SCORES = GAME_DATA.SCORES;

export default class ScreenStats extends AbstractView {

  static gameResultTitle(games) {
    const currentGamesResults = games[0];
    const totalScores = calculateFinalScores(currentGamesResults.stats, currentGamesResults.lives);
    return totalScores > 0 ? GAME_DATA.GAME_RESULT.WIN : GAME_DATA.GAME_RESULT.LOSE;
  }

  countEntries(array, key) {
    let count = 0;
    array.forEach((element) => {
      count = (element === key) ? ++count : count;
    });
    return count;
  }

  get template() {
    return `${getHeader()}
    <div class="result">Подождите, статистика загружается    
    </div>
    ${footer}`;
  }

  showStats(games) {
    games = games.reverse().slice(0, 5);

    return `<h1>${ScreenStats.gameResultTitle(games)}!</h1>
      ${games.map((game, index) => {
    const rightAnswers = game.stats.filter((answer) => {
      return answer !== GAME_DATA.ANSWER.WRONG;
    });
    const totalScores = calculateFinalScores(game.stats, game.lives);
    const fast = this.countEntries(game.stats, GAME_DATA.ANSWER.FAST);
    const alive = game.lives;
    const slow = this.countEntries(game.stats, GAME_DATA.ANSWER.SLOW);
    const answers = game.stats;
    if (totalScores > 0) {
      return `<table class="result__table">
              <tr>
                <td class="result__number">${index + 1}.</td>
                <td colspan="2">
                  ${stats(answers)}
                </td>
                <td class="result__points">×&nbsp;${GAME_SCORES.SUCCESS}</td>
                <td class="result__total">${rightAnswers.length * GAME_SCORES.SUCCESS}</td>
              </tr>
              ${fast ? `<tr>
                <td></td>
                <td class="result__extra">Бонус за скорость:</td>
                <td class="result__extra">${fast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
                <td class="result__points">×&nbsp;${GAME_SCORES.FAST}</td>
                <td class="result__total">${fast * GAME_SCORES.FAST}</td>
              </tr>` : ``}      
              ${alive > 0 ? `<tr>
                <td></td>
                <td class="result__extra">Бонус за жизни:</td>
                <td class="result__extra">${alive}&nbsp;<span class="stats__result stats__result--alive"></span></td>
                <td class="result__points">×&nbsp;${GAME_SCORES.EXTRA}</td>
                <td class="result__total">${alive * GAME_SCORES.EXTRA}</td>
              </tr>` : ``}      
              ${slow > 0 ? `<tr>
                <td></td>
                <td class="result__extra">Штраф за медлительность:</td>
                <td class="result__extra">${slow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
                <td class="result__points">×&nbsp;${GAME_SCORES.SLOW}</td>
                <td class="result__total">${-slow * GAME_SCORES.SLOW}</td>
              </tr>` : ``}      
              <tr>
                <td colspan="5" class="result__total  result__total--final">${totalScores}</td>
              </tr>
            </table>`;
    } else {
      return `<table class="result__table">
            <tr>
              <td class="result__number">${index + 1}.</td>
              <td>
                <ul class="stats">
                  ${stats(answers)}
                </ul>
              </td>
              <td class="result__total"></td>
              <td class="result__total  result__total--final">fail</td>
            </tr>
          </table>`;
    }
  }).join(``)}`;
  }

  bind() {
    this.resultBox = this.element.querySelector(`.result`);
    const buttonBack = this.element.querySelector(`.back`);

    buttonBack.onclick = () => {
      this.onReturnButtonClick();
    };
  }
}
