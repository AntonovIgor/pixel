import {showScreen} from './../../engine/show-screen';
import ScreenIntro from './../screen-intro/screen-intro-view';
import Application from '../../application';

class IntroScreen {
  constructor() {
    this.screen = new ScreenIntro();
  }

  init() {
    showScreen(this.screen);

    this.screen.onContinueButtonClick = () => {
      Application.showGreeting();
    };
  }
}

export default new IntroScreen();
