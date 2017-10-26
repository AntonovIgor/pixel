import {showScreen} from './../../engine/show-screen';
import ScreenIntro from './../screen-intro/screen-intro-view';
import screenGreeting from './../screen-greeting/screen-greeting';

export default () => {
  const screenIntro = new ScreenIntro();

  screenIntro.onContinueButtonClick = () => {
    showScreen(screenGreeting());
  };

  return screenIntro;
};
