const { describe, it } = require('node:test');
const assert = require('assert');
const {  countVowels, hasConsecutiveIdenticalLetter} = require('../lib/string-utils');

describe('countVowels', () => {
  it('should be 0, when there is no string', () => {
    assert.strictEqual(countVowels(''), 0);
  });

  it('should be 3, when the given string is "aaa"', () => {
    assert.strictEqual(countVowels('aaa'), 3);
  });
});

describe('hasConsecutiveIdenticalLetter', () => {
  it('should be false, when empty string is provided', () => {
    assert.strictEqual(hasConsecutiveIdenticalLetter(''), false);
  });

  it('should be true, when there are two consecutive same letter.', () => {
    assert.strictEqual(hasConsecutiveIdenticalLetter('aa'),true);
  });
});