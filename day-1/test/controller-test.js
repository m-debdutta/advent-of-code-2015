const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const { Santa } = require('../src/santa');
const { Controller } = require('../src/controller');

describe('controller', () => {
  describe('getFinalPosition()', () => {
    it('should give the initial position of santa', () => {
      const santa = new Santa(0)
      const controller = new Controller(santa);

      const actual = controller.getFinalPosition();
      const expected = 0;

      strictEqual(actual, expected);
    });
  });

  describe('instruct()', () => {
    it('should move the santa one floor up', () => {
      const santa = new Santa(0)
      const controller = new Controller(santa);
      const instructions = '(';

      controller.run(instructions);
      const actual = controller.getFinalPosition();
      const expected = 1;

      strictEqual(actual, expected);
    });

    it('should move the santa one floor down', () => {
      const santa = new Santa(0)
      const controller = new Controller(santa);
      const instructions = ')';

      controller.run(instructions);
      const actual = controller.getFinalPosition();
      const expected = -1;

      strictEqual(actual, expected);
    });
  });

  describe('getFirstTimeBasementPosition()', () => {
    it('should give the position of the character which causes the santa to enter basement, when santa enter the basement only once', () => {
      const santa = new Santa(0)
      const controller = new Controller(santa);
      const instructions = ')';

      controller.run(instructions);
      const actual = controller.getPositionOfSantaEnterBasement();
      const expected = 1;

      strictEqual(actual, expected);
    });

    it('should give the position of the character which causes the santa to enter basement, when santa enter the basement more than once', () => {
      const santa = new Santa(0)
      const controller = new Controller(santa);
      const instructions = ')())';

      controller.run(instructions);
      const actual = controller.getPositionOfSantaEnterBasement();
      const expected = 1;

      strictEqual(actual, expected);
    });
  });
});