import GAME_DATA from '../data/game-data';

const GAME_SCORES = GAME_DATA.SCORES;

export const calculateFinalScores = (answers, lives) => {
  const answersLength = answers.length;
  const wrongAnswersLength = answers.filter((answer) => answer === GAME_DATA.ANSWER.WRONG).length;
  const isPositiveLives = lives >= 0;
  const isAllAnswers = answersLength === GAME_DATA.ANSWERS_MINIMUM;
  const isLessWrongAnswers = wrongAnswersLength <= GAME_DATA.LIVES;
  let scores = 0;
  
  answers.forEach((answer) => {
    let timeScores = 0;

    if (answersLength && answer !== GAME_DATA.ANSWER.WRONG) {
      if (answer === GAME_DATA.ANSWER.FAST) {
        timeScores = GAME_SCORES.FAST;
      } else if (answer === GAME_DATA.ANSWER.SLOW) {
        timeScores = GAME_SCORES.SLOW;
      }
      scores += GAME_DATA.SCORES.SUCCESS + timeScores;
    }
  });

  return (isPositiveLives && isAllAnswers && isLessWrongAnswers) ?
    scores + lives * GAME_SCORES.EXTRA : GAME_SCORES.LOSE;
};
