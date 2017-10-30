import ScreenGameTwo from './../screen-game-two/screen-game-two-view';
import {Timer} from './../../engine/timer';
import {showNextScreen} from './../../engine/show-next-screen';

export default (state, question) => {
  const screenGameTwo = new ScreenGameTwo(state, question);

  let answerTime = state.time;

  const timer = setInterval(() => {
    const timeBox = screenGameTwo.element.querySelector(`.game__timer`);
    const time = new Timer(timeBox.textContent).tick();
    timeBox.textContent = time;
    answerTime = state.time - time;
  }, 1000);

  screenGameTwo.onChangeForm = (answersArray) => {
    showNextScreen(state, timer, answerTime, answersArray, question);
  };

  return screenGameTwo;
};
