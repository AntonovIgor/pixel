import {showScreen} from './../../engine/show-screen';
import ScreenGreetingView from './../screen-greeting/screen-greeting-view';
import Application from '../../application';

class ScreenGreeting {
  constructor() {
    this.screen = new ScreenGreetingView();
  }

  init() {
    showScreen(this.screen);

    this.screen.onContinueButtonClick = () => {
      Application.showRules();
    };
  }
}

export default new ScreenGreeting();
