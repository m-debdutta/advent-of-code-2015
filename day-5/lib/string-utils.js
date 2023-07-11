const countVowels = (string) => {
  const vowels = string.match(/a|e|i|o|u/g);
  return vowels ? vowels.length : 0;
};

const hasConsecutiveIdenticalLetter = (string) => {
  return /(.)\1/.test(string);
};

module.exports = {
  countVowels,
  hasConsecutiveIdenticalLetter
};