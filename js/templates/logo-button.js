import HeaderLogo from './logo-button-view';
import {showScreen} from '../engine/show-screen';
import screenGreeting from '../screens/screen-greeting/screen-greeting';

export default (state, question) => {
  const headerLogo = new HeaderLogo();

  headerLogo.onReturnButtonClick = () => {
    showScreen(screenGreeting());
  };

  return headerLogo;
};
