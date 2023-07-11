const { countVowels, hasConsecutiveIdenticalLetter } = require("../lib/string-utils");

const isDisallowedSubstring = (string) => {
  const disallowedItems = /ab|cd|pq|xy/;
  return disallowedItems.test(string);
}

const isRequired = (string) => {
  const vowelsCount = countVowels(string);
  return hasConsecutiveIdenticalLetter(string) && (vowelsCount > 2);
};

module.exports = {
  isDisallowedSubstring,
  isRequired,
};