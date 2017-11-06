import {showScreen} from '../../engine/show-screen';
import {checkAnswerTime} from '../../engine/check-answer-time';
import ScreenGameOneView from '../screen-game-one/screen-game-one-view';
import ScreenGameTwoView from '../screen-game-two/screen-game-two-view';
import ScreenGameThreeView from '../screen-game-three/screen-game-three-view';
import {Timer} from '../../engine/timer';
import GAME_DATA from '../../data/game-data';
import Application from '../../application';

export default class Game {
  constructor(gameData) {
    this.questions = gameData;
  }

  init() {
    this.lives = GAME_DATA.LIVES;
    this.questionIndex = 0;
    this.answers = [];
    this.stats = [];
    this.timer = new Timer(GAME_DATA.TIME);
    this.time = 0;
    this.isGameLost = false;
    this._stopTimer();
    this._nextScreen();
  }

  _startTimer(screen) {
    const timeBox = screen.element.querySelector(`.game__timer`);
    timeBox.textContent = this.timer.duration;
    this.timeMachine = setInterval(() => {
      this.time = new Timer(timeBox.textContent).tick();
      timeBox.textContent = this.time;

      if (this.time === this.timer.message) {
        this.onAnswer(false);
      }
    }, 1000);
  }

  _stopTimer() {
    if (this.time) {
      this.timer.reset();
      clearInterval(this.timeMachine);
    }
  }

  onAnswer(answer) {
    this._stopTimer();
    const userAnswer = {
      isCorrect: answer,
      time: GAME_DATA.TIME - this.time
    };
    this.stats.push(checkAnswerTime(userAnswer));
    if (!userAnswer.isCorrect) {
      this.lives--;
    }
    if (this.lives >= 0) {
      ++this.questionIndex;
    } else {
      this.lives = 0;
      this.isGameLost = true;
    }
    this._nextScreen();
  }

  _nextScreen() {
    const question = this.questions[this.questionIndex];
    this.user = Application.playerName;

    if (question && !this.isGameLost) {
      const gameType = question.type;
      let screenView = null;

      if (gameType === GAME_DATA.GAME_TYPE.TWO_OF_TWO) {
        screenView = new ScreenGameOneView(this, question);
      } else if (gameType === GAME_DATA.GAME_TYPE.TINDER_LIKE) {
        screenView = new ScreenGameTwoView(this, question);
      } else if (gameType === GAME_DATA.GAME_TYPE.ONE_OF_THREE) {
        screenView = new ScreenGameThreeView(this, question);
      }

      screenView.onReturnButtonClick = () => {
        Application.showGreeting();
      };

      screenView.onAnswerClick = (answer) => {
        this.onAnswer(answer);
      };

      screenView.resizeImages = () => {
        const images = Array.from(screenView.element.querySelectorAll(`.game__option img`));

        images.forEach((img) => {
          const image = new Image();
          image.src = img.src;
          image.onload = () => {
            const currentHeight = img.height;
            img.height = img.naturalHeight * img.width / img.naturalWidth;
            if (img.height > currentHeight) {
              img.height = currentHeight;
              img.width = img.naturalWidth * img.height / img.naturalHeight;
            }
          };
        });
      };

      screenView.resizeImages();
      this._startTimer(screenView);
      showScreen(screenView);
    } else {
      this._stopTimer();
      Application.showStats({
        stats: this.stats,
        lives: this.lives
      }, this.user);
    }
  }
}
