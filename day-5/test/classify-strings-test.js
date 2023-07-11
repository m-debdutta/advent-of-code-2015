const { describe, it } = require('node:test');
const assert = require('assert');
const { countNiceStrings } = require('../src/classify-strings');
const { isRequired, isDisallowedSubstring } = require('../src/string-stats');

describe('countNiceStrings', () => {
  it('should be 0, when text file is empty', () => {
    assert.strictEqual(countNiceStrings('', isDisallowedSubstring, isRequired), 0);
  });

  it('should be 1, when text file has single entry "aaa"', () => {
    assert.strictEqual(countNiceStrings('aaa', isDisallowedSubstring, isRequired), 1);
  });

  it('should be 0, when the text given is naught, having no consecutive same letter', () => {
    assert.strictEqual(countNiceStrings('jchzalrnumimnmhp', isDisallowedSubstring, isRequired), 0)
  });

  it('should be 2, when both the string are nice', () => {
    assert.strictEqual(countNiceStrings('ugknbfddgicrmopn\naaa', isDisallowedSubstring, isRequired), 2)
  });
});