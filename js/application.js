import IntroScreen from './screens/screen-intro/screen-intro';
import GreetingScreen from './screens/screen-greeting/screen-greeting';
import RulesScreen from './screens/screen-rules/screen-rules';
import GameScreen from './screens/game/game';
import StatsScreen from './screens/screen-stats/screen-stats';

export default class Application {
  static showIntro() {
    const screen = new IntroScreen();
    screen.init();
  }

  static showGreeting() {
    const screen = new GreetingScreen();
    screen.init();
  }

  static showRules() {
    const screen = new RulesScreen();
    screen.init();
  }

  static showGame() {
    const screen = new GameScreen();
    screen.init();
  }

  static showStats(state) {
    const screen = new StatsScreen(state);
    screen.init();
  }
}
