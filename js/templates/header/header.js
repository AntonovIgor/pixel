import Header from './header-view';
import Application from '../../application';

export default (time, lives) => {
  const header = new Header(time, lives);

  header.onReturnButtonClick = () => {
    Application.showGreeting();
  };

  return header.element;
};
