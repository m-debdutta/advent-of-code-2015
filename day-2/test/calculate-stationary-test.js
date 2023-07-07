const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const {
  totalWrapperRequired,
  totalRibbonRequired,
} = require('../src/calculate-stationary.js');

describe('calculateTotalWrapperRequired', () => {
  it('should be 0 feet, when there is no gift', () => {
    strictEqual(totalWrapperRequired('0x0x0'), 0);
  });

  it('should be 7 feet, when gift is of unit dimension', () => {
    strictEqual(totalWrapperRequired('1x1x1'), 7);
  });

  it('should be 58 feet, when gift is of 2x3x4 dimension', () => {
    strictEqual(totalWrapperRequired('2x3x4'), 58);
  });

  it('should be sum of areas of the gifts to wrap', () => {
    strictEqual(totalWrapperRequired('4x2x3\n1x1x10'), 101);
  });
});

describe('calculateTotalRibbonRequired', () => {
  it('should be zero, when there is no gift', () => {
    const expected = 0;
    const actual = totalRibbonRequired('0x0x0');

    strictEqual(actual, expected);
  });

  it('should be 5, when the gift is of unit dimension', () => {
    const expected = 5;
    const actual = totalRibbonRequired('1x1x1');

    strictEqual(actual, expected);
  });

  it('should be 34, when there is one gift of 2x3x4 dimensions', () => {
    const expected = 34;
    const actual = totalRibbonRequired('2x3x4');

    strictEqual(actual, expected);
  });

  it('should calculate the sum of the length of ribbon needed for each gift-Box', () => {
    const expected = 48;
    const actual = totalRibbonRequired('2x3x4\n1x1x10');

    strictEqual(actual, expected);
  });
});