import ScreenGameOne from '../screen-game-one/screen-game-one-view';
import {Timer} from './../../engine/timer';
import {showNextScreen} from './../../engine/show-next-screen';

export default (state, question) => {
  const screenGameOne = new ScreenGameOne(state, question);

  let answerTime = state.time;

  const timer = setInterval(() => {
    const timeBox = screenGameOne.element.querySelector(`.game__timer`);
    const time = new Timer(timeBox.textContent).tick();
    timeBox.textContent = time;
    answerTime = state.time - time;
  }, 1000);

  screenGameOne.onAnswerSelect = (gameOptions, answersArray) => {
    if (answersArray.length === gameOptions.length) {
      showNextScreen(state, timer, answerTime, answersArray, question);
    }
  };

  return screenGameOne;
};
