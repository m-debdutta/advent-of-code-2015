const { isInvalidString, doesSatisfyRequirement } = require("./string-stats");


const countNiceStrings = (strings) => {
  const niceStrings = [];
  strings.split('\n').forEach(string => {
    const isValid = !isInvalidString(string) && doesSatisfyRequirement(string);

    if (!isInvalidString(string) && isValid) {
      niceStrings.push(string);
    }
  });
  return niceStrings.length;
}
module.exports = { countNiceStrings };