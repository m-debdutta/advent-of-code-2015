const { describe, it } = require('node:test');
const assert = require('assert');
const {countNiceStrings} = require('../src/classify-strings');

describe('countNiceStrings', () => {
  it('should be 0, when text file is empty', () => {
    assert.strictEqual(countNiceStrings([]), 0);
  });
});