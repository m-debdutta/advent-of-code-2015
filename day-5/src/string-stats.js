const { countVowels, hasConsecutiveIdenticalLetter } = require("../lib/string-utils");

const isInvalidString = (string) => {
  const disallowedItems = /ab|cd|pq|xy/;
  return disallowedItems.test(string);
}

const doesSatisfyRequirement = (string) => {
  const vowelsCount = countVowels(string);
  return hasConsecutiveIdenticalLetter(string) && (vowelsCount > 2);
};

module.exports = {
  isInvalidString,
  doesSatisfyRequirement,
};