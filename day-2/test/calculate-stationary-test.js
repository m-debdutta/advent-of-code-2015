const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const {
  calculateTotalWrapperRequired,
  calculateAreaOfGiftWrapper
} = require('../src/calculate-stationary.js');

describe('calculate-stationary.js', () => {
  describe('calculatePaperToBeOrdered', () => {
    it('should be 7 feet, when gift is of unit dimension', () => {
      strictEqual(calculateTotalWrapperRequired('1x1x1'), 7);
    });

    it('should be 58 feet, when gift is of 2x3x4 dimension', () => {
      strictEqual(calculateTotalWrapperRequired('2x3x4'), 58);
    });


    it('should give total paper required to wrap the gifts', () => {
      strictEqual(calculateTotalWrapperRequired('4x2x3\n1x1x10'), 101);
    });
  });

  describe('calculatePaperToWrapGift', () => {
    it('should be 0 feet, when there is no gift', () => {
      strictEqual(calculateAreaOfGiftWrapper([0, 0, 0]), 0);
    });

    it('should be 43, when gift is of 1x1x10 dimension', () => {
      strictEqual(calculateAreaOfGiftWrapper([1, 1, 10]), 43);
    });

    it('should be 58, when gift is of dimension 2x3x4', () => {
      strictEqual(calculateAreaOfGiftWrapper([2, 3, 4]), 58);
    });
  });

  describe('calculateRibbonRequired', () => {
    
  });
});