import assert from 'assert';
import {getTimer} from '../engine/timer';

describe(``, () => {
  it(``, () => {
    const timer = getTimer(0);
    assert.equal(timer.tick().value, 1);
  });
});

