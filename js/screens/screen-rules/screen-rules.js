import {showScreen} from './../../engine/show-screen';
import ScreenRules from './../screen-rules/screen-rules-view';
import Application from '../../application';

class RulesScreen {
  constructor() {
    this.screen = new ScreenRules();
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

export default new RulesScreen();
