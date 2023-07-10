const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const { Santa } = require('../src/santa');

describe('santa', () => {
  describe('start()', () => {
    it('should start following the instructions from the given floor', () => {
      const santa = new Santa(0);

      const expected = 0;
      const actual = santa.currentFloor();

      strictEqual(actual, expected);
    });
  });

  describe('follow()', () => {
    it('should move one floor up', () => {
      const santa = new Santa(0);

      santa.moveUp();
      
      const expected = 1;
      const actual = santa.currentFloor();

      strictEqual(actual, expected);
    });

    it('should move one floor down', () => {
      const santa = new Santa(0);

      santa.moveDown();
      
      const expected = -1;
      const actual = santa.currentFloor();

      strictEqual(actual, expected);
    });
  });
});