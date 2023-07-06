const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const { calculatePaperToBeOrdered } = require('../src/calculate-stationary.js');

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