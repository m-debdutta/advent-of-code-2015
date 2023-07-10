const { describe, it } = require('node:test');
const assert = require('assert');
const { findNumericCode } = require('../src/advent-coin');

describe('findNumericCode()', () => {
  it('should find 609043, which when combined with the secretKey "abcdef" has the MD5 hash that starts with "00000"', () => {
    assert.strictEqual(findNumericCode('abcdef', '00000'), 609043);
  });

  it('should find 1048970, which when combined with the secretKey "pqrstuv" has the MD5 hash that starts with "00000"', () => {
    assert.strictEqual(findNumericCode('pqrstuv', '00000'), 1048970);
  });
});