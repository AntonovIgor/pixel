export default {
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
  LIVES: 3, 
  answers: [`fast`, `slow`, `correct`, `wrong`, `fast`, `slow`, `correct`, `wrong`],
  questions: [
    {
      type: `guessEach`,
      width: 468,
      height: 458,
      options: [
        {
          source: `http://placehold.it/468x458`,
          isPhoto: false
        },
        {
          source: `http://placehold.it/468x458`,
          isPhoto: true
        }
      ]
    },
    {
      type: `guessOneBig`,
      source: `http://placehold.it/705x455`,
      width: 705,
      height: 455,
      isPhoto: false
    },
    {
      type: `guessEach`,
      width: 304,
      height: 455,
      options: [
        {
          source: `http://placehold.it/304x455`,
          isPhoto: false
        },
        {
          source: `http://placehold.it/304x455`,
          isPhoto: true
        },
        {
          source: `http://placehold.it/304x455`,
          isPhoto: false
        }
      ]
    },
    {
      type: `guessEach`,
      width: 468,
      height: 458,
      options: [
        {
          source: `http://placehold.it/468x458`,
          isPhoto: false
        },
        {
          source: `http://placehold.it/468x458`,
          isPhoto: true
        }
      ]
    },
    {
      type: `guessOneBig`,
      source: `http://placehold.it/705x455`,
      width: 705,
      height: 455,
      isPhoto: false
    },
    {
      type: `guessEach`,
      width: 304,
      height: 455,
      options: [
        {
          source: `http://placehold.it/304x455`,
          isPhoto: false
        },
        {
          source: `http://placehold.it/304x455`,
          isPhoto: true
        },
        {
          source: `http://placehold.it/304x455`,
          isPhoto: false
        }
      ]
    },
    {
      type: `guessEach`,
      width: 468,
      height: 458,
      options: [
        {
          source: `http://placehold.it/468x458`,
          isPhoto: false
        },
        {
          source: `http://placehold.it/468x458`,
          isPhoto: true
        }
      ]
    },
    {
      type: `guessOneBig`,
      source: `http://placehold.it/705x455`,
      width: 705,
      height: 455,
      isPhoto: false
    },
    {
      type: `guessEach`,
      width: 304,
      height: 455,
      options: [
        {
          source: `http://placehold.it/304x455`,
          isPhoto: false
        },
        {
          source: `http://placehold.it/304x455`,
          isPhoto: true
        },
        {
          source: `http://placehold.it/304x455`,
          isPhoto: false
        }
      ]
    },
    {
      type: `guessEach`,
      width: 468,
      height: 458,
      options: [
        {
          source: `http://placehold.it/468x458`,
          isPhoto: false
        },
        {
          source: `http://placehold.it/468x458`,
          isPhoto: true
        }
      ]
    }
  ]
};
