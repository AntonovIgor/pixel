import {showScreen} from './../../engine/show-screen';
import ScreenIntroView from './../screen-intro/screen-intro-view';
import Application from '../../application';

class ScreenIntro {
  constructor() {
    this.screen = new ScreenIntroView();
  }

  init() {
    showScreen(this.screen);

    this.screen.onContinueButtonClick = () => {
      Application.showGreeting();
    };
  }
}

export default new ScreenIntro();
