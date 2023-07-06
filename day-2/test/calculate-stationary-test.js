const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const {calculateWrapingPaper} = require('../src/calculate-stationary.js');

describe('calculateWrapingPaper', () => {
  it('should calculate the wraping paper needed to wrap a gift of unit dimension', () => {
    strictEqual(calculateWrapingPaper('1x1x1'), 7);
  });

  it('should calculate the wraping paper needed to wrap a gift of 2x3x4 dimension', () => {
    strictEqual(calculateWrapingPaper('2x3x4'), 58);
  });
});