export default {
  INTRO_TEXT: `Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`,
  GREETING_TEMPLATE: `
    <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
      <p>Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.</p>`.trim(),
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
  LIVES: 3
  // answers: [`fast`, `slow`, `correct`, `wrong`, `fast`, `slow`, `correct`, `wrong`],
};
