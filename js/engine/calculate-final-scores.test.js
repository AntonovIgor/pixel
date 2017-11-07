import assert from 'assert';
import {calculateFinalScores} from '../engine/calculate-final-scores';

describe(`Подсчет очков игры`, () => {
  it(`Если игрок ответил меньше, чем на 10 вопросов, то игра считается непройденой и функция должна вернуть -1`, () => {
    const answers = [
      `correct`
    ];
    const lives = 3;
    assert.equal(calculateFinalScores(answers, lives), -1);
  });

  it(`Если у игрока не осталось жизней и он ответил не на все вопросы правильно, то игра считается непройденой и функция должна вернуть -1`, () => {
    const answers = [
      `correct`,
      `wrong`,
      `fast`,
      `fast`
    ];
    const lives = 0;
    assert.equal(calculateFinalScores(answers, lives), -1);
  });

  it(`Если игрок ответил на все вопросы и не быстро и не медленно и у него остались все жизни, то функция должна вернуть 1150 очков`, () => {
    const answers = [
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`,
      `correct`
    ];


    const lives = 3;
    assert.equal(calculateFinalScores(answers, lives), 1150);
  });

  it(`Если игрок ответил на 5 вопросов быстро и на 5 вопросов медленно и у него осталась 1 жизнь, то функция должна вернуть 1050 очков`, () => {
    const answers = [
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `fast`,
      `slow`,
      `slow`,
      `slow`,
      `slow`,
      `slow`
    ];
    const lives = 1;
    assert.equal(calculateFinalScores(answers, lives), 1050);
  });
});

