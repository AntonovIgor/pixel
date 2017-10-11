import assert from 'assert';
import {getTimer} from '../engine/timer';

describe(``, () => {
  it(`При каждом обновлении таймера (вызов метода tick) время уменьшается на единицу`, () => {
    const timer = getTimer(20);
    assert.equal(timer.tick().value, 19);
  });

  it(`При достижении конца таймер должен сообщить о том, что он закончен`, () => {
    const timer = getTimer(0);
    assert.equal(timer.tick(), `stop`);
  });

  it(`При сбросе таймера (вызов метода reset) значение таймера равно нулю`, () => {
    const timer = getTimer(30);
    assert.equal(timer.reset().value, 0);
  });
});
