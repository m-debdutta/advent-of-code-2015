const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { extractDimensions } = require('../src/dimension-extractor.js');


describe('dimension-extractor-test.js', () => {
  describe('extractDimensions', () => {
    it('should extract dimension of a gift', () => {
      const giftSize = '2x3x4';

      const actual = extractDimensions(giftSize);
      const expected = [[2, 3, 4]];

      deepStrictEqual(actual, expected);
    });

    it('should extract dimensions of multiple gifts', () => {
      const giftSize = '2x5x4\n2x3x4';

      const actual = extractDimensions(giftSize);
      const expected = [[2, 5, 4], [2, 3, 4]];

      deepStrictEqual(actual, expected);
    });
  });
});