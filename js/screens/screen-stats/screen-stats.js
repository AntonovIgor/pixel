import ScreenStats from '../screen-stats/screen-stats-view';
import {showScreen} from './../../engine/show-screen';
import Application from '../../application';

export default class StatsScreen {
  init(state) {
    this.screen = new ScreenStats(state);
    showScreen(this.screen);

    this.screen.onContinueButtonClick = () => {
      Application.showGreeting();
    };

    this.screen.onReturnButtonClick = () => {
      Application.showGreeting();
    };
  }
}
