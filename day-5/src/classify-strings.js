const countNiceStrings = (strings, isDisallowedSubstring, doesFulfillRequirements) => {
  const niceStrings = [];
  strings.split('\n').forEach(string => {
    const isNiceString = !isDisallowedSubstring(string) && doesFulfillRequirements(string);
    
    if (isNiceString) niceStrings.push(string);
  });

  return niceStrings.length;
};

module.exports = { countNiceStrings };