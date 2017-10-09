import assert from 'assert';
import {calculateFinalScores} from '../engine/calculate-final-scores';

describe(`Подсчет очков игры`, () => {
  it(`Если игрок ответил меньше, чем на 10 вопросов, то игра считается непройденой и функция должна вернуть -1`, () => {
    const answersArray = [
      {
        isCorrect: true,
        time: 12
      }
    ];
    const lives = 3;
    assert.equal(calculateFinalScores(answersArray, lives), -1);
  });

  it(`Если у игрока не осталось жизней и он ответил не на все вопросы правильно, то игра считается непройденой и функция должна вернуть -1`, () => {
    const answersArray = [
      {
        isCorrect: true,
        time: 12
      },
      {
        isCorrect: false,
        time: 34
      },
      {
        isCorrect: true,
        time: 2
      },
      {
        isCorrect: false,
        time: 5
      }
    ];
    const lives = 0;
    assert.equal(calculateFinalScores(answersArray, lives), -1);
  });

  it(`Если игрок ответил на все вопросы и не быстро и не медленно и у него остались все жизни, то функция должна вернуть 1150 очков`, () => {
    const answersArray = [
      {
        isCorrect: true,
        time: 12
      }, {
        isCorrect: true,
        time: 12
      }, {
        isCorrect: true,
        time: 12
      }, {
        isCorrect: true,
        time: 12
      }, {
        isCorrect: true,
        time: 12
      }, {
        isCorrect: true,
        time: 12
      }, {
        isCorrect: true,
        time: 12
      }, {
        isCorrect: true,
        time: 12
      }, {
        isCorrect: true,
        time: 12
      }, {
        isCorrect: true,
        time: 12
      }
    ];
    const lives = 3;
    assert.equal(calculateFinalScores(answersArray, lives), 1150);
  });

  it(`Если игрок ответил на 5 вопросов быстро и на 5 вопросов медленно и у него осталась 1 жизнь, то функция должна вернуть 1150 очков`, () => {
    const answersArray = [
      {
        isCorrect: true,
        time: 6
      }, {
        isCorrect: true,
        time: 5
      }, {
        isCorrect: true,
        time: 4
      }, {
        isCorrect: true,
        time: 9
      }, {
        isCorrect: true,
        time: 5
      }, {
        isCorrect: true,
        time: 21
      }, {
        isCorrect: true,
        time: 32
      }, {
        isCorrect: true,
        time: 54
      }, {
        isCorrect: true,
        time: 23
      }, {
        isCorrect: true,
        time: 20
      }
    ];
    const lives = 1;
    assert.equal(calculateFinalScores(answersArray, lives), 1100);
  });
});

