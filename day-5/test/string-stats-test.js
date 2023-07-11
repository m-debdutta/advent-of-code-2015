const { describe, it } = require('node:test');
const assert = require('assert');
const { isDisallowedSubstring, isRequired, countVowels, hasConsecutiveIdenticalLetter } = require('../src/string-stats');

describe('disallowedItems', () => {
  it('should be true, when the string contain one of the disallowed substring', () => {
    assert.strictEqual(isDisallowedSubstring('ab'), true);
  });

  it('should be false, when the string does not contain any of the disallowed substring', () => {
    assert.strictEqual(isDisallowedSubstring('aa'), false);
  });
});

describe('isRequired', () => {
  it('should be true, when the string contain two consecutive similar letter and atleast three vowels', () => {
    assert.strictEqual(isRequired('aaa'), true);
  });
});

