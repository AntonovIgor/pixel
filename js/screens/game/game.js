import {showScreen} from '../../engine/show-screen';
import {checkAnswer} from '../../engine/check-answer';
import {calculateFinalScores} from '../../engine/calculate-final-scores';
import {checkAnswerTime} from '../../engine/check-answer-time';
import ScreenGameOne from '../screen-game-one/screen-game-one-view';
import ScreenGameTwo from '../screen-game-two/screen-game-two-view';
import ScreenGameThree from '../screen-game-three/screen-game-three-view';
import {Timer} from '../../engine/timer';
import GAME_DATA from '../../data/game-data';
import Application from '../../application';
import questions from '../../data/fakeQuestions';

export default class GameScreen {

  init() {
    this.lives = GAME_DATA.LIVES;
    this.scores = GAME_DATA.SCORES.LOSE;
    this.questionIndex = 0;
    this.answers = [];
    this.stats = [];
    this.gamesHistory = [];
    this.timer = new Timer(GAME_DATA.TIME);
    this.stopTimer();
    this.nextScreen();
    this.time = 0;
  }

  startTimer(screen) {
    const timeBox = screen.element.querySelector(`.game__timer`);
    this.timeMachine = setInterval(() => {
      this.time = new Timer(timeBox.textContent).tick();
      timeBox.textContent = this.time;

      if (this.time === this.timer.message) {
        const answer = {
          isCorrect: false,
          time: this.time
        };
        this.stats.push(checkAnswerTime(answer));
        this.nextScreen();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.time) {
      this.timer.reset();
      clearInterval(this.timeMachine);
    }
  }

  nextScreen() {
    const question = questions[this.questionIndex];

    if (question && this.lives >= 0) {
      const gameType = question.type;
      let screenView = null;

      if (gameType === GAME_DATA.GAME_TYPE.TWO_OF_TWO) {
        screenView = new ScreenGameOne(this, question);
      } else if (gameType === GAME_DATA.GAME_TYPE.TINDER_LIKE) {
        screenView = new ScreenGameTwo(this, question);
      } else if (gameType === GAME_DATA.GAME_TYPE.ONE_OF_THREE) {
        screenView = new ScreenGameThree(this, question);
      }

      screenView.onReturnButtonClick = () => {
        Application.showGreeting();
      };

      screenView.onAnswerClick = (answersArray) => {
        const answer = {
          isCorrect: checkAnswer(answersArray, question),
          time: GAME_DATA.TIME - this.time
        };
        this.stats.push(checkAnswerTime(answer));
        if (answer.isCorrect) {
          this.scores = calculateFinalScores(this.stats, this.lives);
        } else {
          this.lives--;
        }
        this.questionIndex++;
        this.nextScreen();
      };

      this.startTimer(screenView);
      showScreen(screenView);
    } else {
      this.stopTimer();
      Application.showStats(this);
    }
  }
}
