import {showScreen} from './../../engine/show-screen';
import ScreenGreeting from './../screen-greeting/screen-greeting-view';
import Application from '../../application';

export default class GreetingScreen {
  constructor() {
    this.screen = new ScreenGreeting();
  }

  init() {
    showScreen(this.screen);

    this.screen.onContinueButtonClick = () => {
      Application.showRules();
    };
  }
}
