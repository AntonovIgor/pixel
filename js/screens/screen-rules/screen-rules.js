import {showScreen} from './../../engine/show-screen';
import ScreenRules from './../screen-rules/screen-rules-view';
import Application from '../../application';

export default class RulesScreen {
  constructor() {
    this.screen = new ScreenRules();
  }

  init() {
    showScreen(this.screen);

    this.screen.onStartGame = () => {
      Application.showGame();
    };
    this.screen.onReturnButtonClick = () => {
      Application.showGreeting();
    };
  }
}
