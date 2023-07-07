const { describe, it } = require('node:test');
const { strictEqual, deepStrictEqual } = require('assert');
const { surfaceAreaOfCuboid } = require('../utilities/math-utils.js');


describe('utilitites-test.js', () => {
  describe('calculateSurfaceAreaOfCuboid', () => {
    it('should give 0 when there in no cuboid', () => {
      const actual = surfaceAreaOfCuboid([0, 0, 0]);
      const expected = 0;

      strictEqual(actual, expected);
    });

    it('should give 6 when all sides of cuboid is one unit', () => {
      const actual = surfaceAreaOfCuboid([1, 1, 1]);
      const expected = 6;

      strictEqual(actual, expected);
    });

    it('should calculate the surface area of a cuboid', () => {
      strictEqual(surfaceAreaOfCuboid([2, 3, 4]), 52);
      strictEqual(surfaceAreaOfCuboid([1, 1, 10]), 42);
    });
  });
});