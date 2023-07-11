const { describe, it } = require('node:test');
const assert = require('assert');
const {countNiceStrings} = require('../src/classify-strings');

describe('countNiceStrings', () => {
  it('should be 0, when text file is empty', () => {
    assert.strictEqual(countNiceStrings(''), 0);
  });

  it('should be 1, when text file has single entry "aaa"', () => {
    assert.strictEqual(countNiceStrings('aaa'), 1);
  });
});

