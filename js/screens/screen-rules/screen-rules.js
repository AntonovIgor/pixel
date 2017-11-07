import {showScreen} from './../../engine/show-screen';
import ScreenRulesView from './../screen-rules/screen-rules-view';
import Application from '../../application';

class ScreenRules {
  constructor() {
    this.screen = new ScreenRulesView();
  }

  init() {
    showScreen(this.screen);

    this.screen.onStartGame = (playerName) => {
      Application.showGame(playerName);
    };
    this.screen.onReturnButtonClick = () => {
      Application.showGreeting();
    };
  }
}

export default new ScreenRules();
