import introScreen from './screens/screen-intro/screen-intro';
import greetingScreen from './screens/screen-greeting/screen-greeting';
import rulesScreen from './screens/screen-rules/screen-rules';
import GameScreen from './screens/game/game';
import StatsScreen from './screens/screen-stats/screen-stats';
import SplashScreen from './screens/screen-splash/screen-splash';
import {showScreen} from './engine/show-screen';
import Loader from './loader';

const ControllerId = {
  INTRO: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stats`
};

const loadState = (dataString) => {
  try {
    return JSON.parse(dataString);
  } catch (e) {
    return ``;
  }
};

export default class Application {
  static start() {
    const splash = new SplashScreen();
    showScreen(splash);
    splash.start();

    Loader.loadData()
        .then((gameData) => {
          Application.init(gameData);
        })
        .then(splash.stop())
        .catch(window.console.error);
  }

  static init(gameData) {
    this.routes = {
      [ControllerId.INTRO]: introScreen,
      [ControllerId.GREETING]: greetingScreen,
      [ControllerId.RULES]: rulesScreen,
      [ControllerId.GAME]: new GameScreen(gameData),
      [ControllerId.STATS]: new StatsScreen()
    };
    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      this.changeHash(id, data);
    };
    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static changeHash(id, data) {
    const controller = this.routes[id];
    if (controller) {
      controller.init(loadState(data));
    }
    if (data) {
      this.playerName = data;
    }
  }

  static showIntro() {
    location.hash = ControllerId.INTRO;
  }

  static showGreeting() {
    location.hash = ControllerId.GREETING;
  }

  static showRules() {
    location.hash = ControllerId.RULES;
  }

  static showGame(playerName) {
    this.playerName = playerName;
    location.hash = `${ControllerId.GAME}?${playerName}`;

  }

  static showStats(state, playerName) {
    Loader.saveResults(state, playerName)
        .then(() => {
          location.hash = ControllerId.STATS;
        });
  }
}
