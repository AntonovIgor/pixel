import ScreenStats from '../screen-stats/screen-stats-view';
import {showScreen} from './../../engine/show-screen';
import Application from '../../application';
import Loader from '../../loader';


class StatsScreen {
  init() {
    this.screen = new ScreenStats();
    showScreen(this.screen);

    this.screen.onContinueButtonClick = () => {
      Application.showGreeting();
    };

    this.screen.onReturnButtonClick = () => {
      Application.showGreeting();
    };
    const playerName = Application.playerName;
    Loader.loadResults(playerName)
        .then((data) => {
          this.screen.resultBox.innerHTML = this.screen.showStats(data);
        });
  }
}

export default new StatsScreen();
