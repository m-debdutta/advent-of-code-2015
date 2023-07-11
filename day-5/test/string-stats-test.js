const { describe, it } = require('node:test');
const assert = require('assert');
const {isInvalidString, doesSatisfyRequirement, countVowels, hasConsecutiveIdenticalLetter} = require('../src/string-stats');

describe('disallowedItems', () => {
  it('should be true, when the string contain one of the disallowed substring', () => {
    assert.strictEqual(isInvalidString('ab'), true);
  });

  it('should be false, when the string does not contain any of the disallowed substring', () => {
    assert.strictEqual(isInvalidString('aa'), false);
  });
});

describe('doesSatisfyRequirement', () => {
  it('should be true, when the string contain two consecutive similar letter and atleast three vowels', () => {
    assert.strictEqual(doesSatisfyRequirement('aaa'), true);
  });
});

