import assert from 'assert';
import {Timer} from '../engine/timer';

describe(``, () => {
  it(`При каждом обновлении таймера (вызов метода tick) время уменьшается на единицу`, () => {
    assert.equal(new Timer(20).tick(), 19);
  });

  it(`При достижении конца таймер должен сообщить о том, что он закончен`, () => {
    assert.equal(new Timer(0).tick(), `Время истекло`);
  });

  it(`При сбросе таймера (вызов метода reset) значение таймера равно нулю`, () => {
    assert.equal(new Timer(30).reset(), 0);
  });
});
