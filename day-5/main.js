const fs = require('fs');
const { countNiceStrings } = require('./src/classify-strings');
const { isDisallowedSubstring, isRequired } = require('./src/string-stats');

const readStrings = (filePath) => fs.readFileSync(filePath, 'utf-8');

const main = () => {
  const strings = readStrings('./resources/string-file.txt')
  console.log('Number of Nice strings are :', countNiceStrings(strings, isDisallowedSubstring, isRequired));
}

main();