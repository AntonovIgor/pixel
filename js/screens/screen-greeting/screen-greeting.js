import {showScreen} from './../../engine/show-screen';
import ScreenGreeting from './../screen-greeting/screen-greeting-view';
import screenRules from './../screen-rules/screen-rules';

export default () => {
  const screenGreeting = new ScreenGreeting();

  screenGreeting.onContinueButtonClick = () => {
    showScreen(screenRules());
  };

  return screenGreeting;
};
