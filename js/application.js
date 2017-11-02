import IntroScreen from './screens/screen-intro/screen-intro';
import GreetingScreen from './screens/screen-greeting/screen-greeting';
import RulesScreen from './screens/screen-rules/screen-rules';
import GameScreen from './screens/game/game';
import StatsScreen from './screens/screen-stats/screen-stats';

const ControllerId = {
  INTRO: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stats`
};

const routes = {
  [ControllerId.INTRO]: new IntroScreen(),
  [ControllerId.GREETING]: new GreetingScreen(),
  [ControllerId.RULES]: new RulesScreen(),
  [ControllerId.GAME]: new GameScreen(),
  [ControllerId.STATS]: new StatsScreen()
};

const saveState = (state) => {
  return JSON.stringify(state);
};

const loadState = (dataString) => {
  try {
    return JSON.parse(dataString);
  } catch (e) {
    return ``;
  }
};

export default class Application {
  static init() {
    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      this.changeHash(id, data);
    };
    window.onhashchange = hashChangeHandler;
    hashChangeHandler();
  }

  static changeHash(id, data) {
    const controller = routes[id];
    if (controller) {
      controller.init(loadState(data));
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

  static showGame() {
    location.hash = ControllerId.GAME;
  }

  static showStats(state) {
    location.hash = `${ControllerId.STATS}?${saveState(state)}`;
  }
}
