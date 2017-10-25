export default {
  INTRO_TEXT: `Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`,
  GREETING_TEMPLATE: `
    <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
      <p>Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.</p>`.trim(),
  RULES_TEMPLATE: `<h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>`,
  ANSWERS_MINIMUM: 10,
  SCORES: {
    SUCCESS: 100,
    LOSE: -1,
    FAST: 50,
    EXTRA: 50,
    SLOW: -50
  },
  ANSWER_TIME: {
    FAST: 10,
    SLOW: 20
  },
  ANSWER: {
    FAST: `fast`,
    SLOW: `slow`,
    CORRECT: `correct`,
    WRONG: `wrong`
  },
  ANSWER_TYPE: {
    PAINTING: `painting`,
    PHOTO: `photo`
  },
  GAME_TYPE: {
    TWO_OF_TWO: `two-of-two`,
    TINDER_LIKE: `tinder-like`,
    ONE_OF_THREE: `one-of-three`
  },
  LIVES: 3
};
