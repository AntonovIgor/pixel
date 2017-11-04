import ScreenStats from '../screen-stats/screen-stats-view';
import {showScreen} from './../../engine/show-screen';
import Application from '../../application';
import Loader from '../../loader';

export default class StatsScreen {
  init() {
    Loader.loadResults().
        then((data) => {
          this.screen = new ScreenStats(data);
          showScreen(this.screen);

          this.screen.onContinueButtonClick = () => {
            Application.showGreeting();
          };

          this.screen.onReturnButtonClick = () => {
            Application.showGreeting();
          };
        });
  }
}
