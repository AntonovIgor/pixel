import {showScreen} from './../../engine/show-screen';
import ScreenIntro from './../screen-intro/screen-intro-view';
import Application from '../../application';

export default class IntroScreen {
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
