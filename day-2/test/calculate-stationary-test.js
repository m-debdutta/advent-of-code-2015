const { describe, it } = require('node:test');
const { strictEqual, deepStrictEqual } = require('assert');
const { calculatePaperToBeOrdered } = require('../src/calculate-stationary.js');
const { extractDimensions } = require('../src/dimension-extractor.js');
const { calculateSurfaceAreaOfCuboid, sortAscending } = require('../utilities/math-utils.js');

describe('calculate-stationary.js', () => {
  describe('calculatePaperToBeOrdered', () => {
    it('should calculate the wraping paper needed to wrap a gift of unit dimension', () => {
      strictEqual(calculatePaperToBeOrdered('1x1x1'), 7);
    });

    it('should calculate the wraping paper needed for a gift of 2x3x4 dimension', () => {
      strictEqual(calculatePaperToBeOrdered('2x3x4'), 58);
    });

    it('should calculate the wraping paper needed for a gift of 1x1x10 dimension', () => {
      strictEqual(calculatePaperToBeOrdered('1x1x10'), 43);
    });

    it('should calculate the wraping paper needed for a gift of 1x1x10 dimension, when the dimention are unorderd', () => {
      strictEqual(calculatePaperToBeOrdered('4x2x3'), 58);
    });
  });

  describe('extractDimensions', () => {
    it('should find dimension of a gift', () => {
      const giftSize = '2x3x4';

      const actual = extractDimensions(giftSize);
      const expected = [[2, 3, 4]];

      deepStrictEqual(actual, expected);
    });

    it('should find dimension of multiple gifts', () => {
      const giftSize = '2x5x4\n2x3x4';

      const actual = extractDimensions(giftSize);
      const expected = [[2, 5, 4], [2, 3, 4]];

      deepStrictEqual(actual, expected);
    });
  });

  describe('calculateSurfaceAreaOfCuboid', () => {
    it('should give 0 when there in no cuboid', () => {
      const actual = calculateSurfaceAreaOfCuboid([0, 0, 0]);
      const expected = 0;

      strictEqual(actual, expected);
    });

    it('should give 6 when all sides of cuboid is one unit', () => {
      const actual = calculateSurfaceAreaOfCuboid([1, 1, 1]);
      const expected = 6;

      strictEqual(actual, expected);
    });

    it('should calculate the surface area of a cuboid', () => {
      strictEqual(calculateSurfaceAreaOfCuboid([2, 3, 4]), 52);
      strictEqual(calculateSurfaceAreaOfCuboid([1, 1, 10]), 42);
    });
  });

  describe('sortAscending', () => {
    it('should return the same list when all numbers are equal', () => {
      const expected = [1, 1, 1];
      const actual = sortAscending([1, 1, 1]);

      deepStrictEqual(actual, expected);
    });

    it('should return the same list when all numbers are already in ascending order', () => {
      const expected = [1, 2, 3];
      const actual = sortAscending([1, 2, 3]);

      deepStrictEqual(actual, expected);
    });

    it('should sort the list in ascending order when the list is not arranged', () => {
      const expected = [1, 5, 7];
      const actual = sortAscending([5, 1, 7]);

      deepStrictEqual(actual, expected);
    });
  });
});
