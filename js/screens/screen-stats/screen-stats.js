import ScreenStatsView from '../screen-stats/screen-stats-view';
import {showScreen} from './../../engine/show-screen';
import Application from '../../application';
import Loader from '../../loader';

export default class ScreenStats {
  init() {
    this.screen = new ScreenStatsView();
    showScreen(this.screen);

    this.screen.onContinueButtonClick = () => {
      Application.showGreeting();
    };

    this.screen.onReturnButtonClick = () => {
      Application.showGreeting();
    };

    Loader.loadResults(Application.playerName)
        .then((data) => {
          this.screen.resultBox.innerHTML = this.screen.showStats(data);
        });
  }
}
