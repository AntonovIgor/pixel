import {getElementFromTemplate} from './get-element-from-template';
import {showScreen} from './show-screen';
import screenGreeting from './screen-greeting';
import footer from './templates/footer';

export default (gameData) => {
  const templateIntro = `
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup>${gameData.INTRO_TEXT}</p>
    </div>
  </div>
  ${footer}`.trim();

  const screenIntro = getElementFromTemplate(templateIntro);
  const continueButton = screenIntro.querySelector(`.intro__asterisk`);

  continueButton.onclick = () => showScreen(screenGreeting(gameData));

  return screenIntro;
};
