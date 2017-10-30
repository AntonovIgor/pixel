import ScreenGameThree from '../screen-game-three/screen-game-three-view';
import {Timer} from './../../engine/timer';
import {showNextScreen} from './../../engine/show-next-screen';

export default (state, question) => {
  const screenGameThree = new ScreenGameThree(state, question);

  let answerTime = state.time;

  const timer = setInterval(() => {
    const timeBox = screenGameThree.element.querySelector(`.game__timer`);
    const time = new Timer(timeBox.textContent).tick();
    timeBox.textContent = time;
    answerTime = state.time - time;
  }, 1000);
  screenGameThree.onAnswerClick = (answersArray) => {
    showNextScreen(state, timer, answerTime, answersArray, question);
  };

  return screenGameThree;
};
