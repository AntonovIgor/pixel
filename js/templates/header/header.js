import Header from './header-view';
import {showScreen} from '../../engine/show-screen';
import screenGreeting from '../../screens/screen-greeting/screen-greeting';

export default (time, lives) => {
  const header = new Header(time, lives);

  header.onReturnButtonClick = () => {
    showScreen(screenGreeting());
  };

  return header.element;
};
