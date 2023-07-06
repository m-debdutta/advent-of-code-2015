const { describe, it } = require('node:test');
const { strictEqual, deepStrictEqual } = require('assert');
const { calculatePaperToBeOrdered, parseDimension, toNumber, findSurfaceAreaOfCuboid } = require('../src/calculate-stationary.js');
const exp = require('constants');

describe('calculate-stationary.js', () => {
  describe('calculateWrapingPaper', () => {
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

  describe('parseDimension', () => {
    it('should find dimension from gift size given in ascending order', () => {
      const giftSize = '2x3x4';
      const actual = parseDimension(giftSize);
      const expected = [2, 3, 4];

      deepStrictEqual(actual, expected);
    });

    it('should find dimension from gift size given in any order', () => {
      const giftSize = '2x5x4';
      const actual = parseDimension(giftSize);
      const expected = [2, 4, 5];

      deepStrictEqual(actual, expected);
    });
  });

  describe('toNumber', () => {
    it('should change a stringified-number to number', () => {
      const acutal = toNumber('4');
      const expected = 4;

      strictEqual(acutal, expected);
    });
  });

  describe('findSurfaceAreaOfCuboid', () => {
    it('should give 0 when there in no cuboid', () => {
      const actual = findSurfaceAreaOfCuboid(0, 0, 0);
      const expected = 0;

      strictEqual(actual, expected);
    });

    it('should give 6 when all sides of cuboid is one unit', () => {
      const actual = findSurfaceAreaOfCuboid(1, 1, 1);
      const expected = 6;

      strictEqual(actual, expected);
    });

    it('should calculate the surface area of a cuboid', () => {
      strictEqual(findSurfaceAreaOfCuboid(2, 3, 4), 52);
      strictEqual(findSurfaceAreaOfCuboid(1, 1, 10), 42);
    });
  });
});
