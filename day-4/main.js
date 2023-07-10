const { findNumericCode } = require("./src/advent-coin");

const main = () => {
  const secretKey = 'iwrupvqb';
  const uniqueNumber1 = findNumericCode(secretKey, '00000');
  console.log('The lowest number combines',secretKey,'with to make an MD5 hash starting with five zeroes is', uniqueNumber1);
  const uniqueNumber2 = findNumericCode(secretKey, '000000');
  console.log('The lowest number combines',secretKey,'with to make an MD5 hash starting with six zeroes is', uniqueNumber2);
}

main();