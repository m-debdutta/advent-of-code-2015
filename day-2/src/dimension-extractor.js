const toNumber = a => +a;

const extractDimensions = (giftSizes) => {
  return giftSizes.split('\n').map((line) => {
    return line.split('x').map(toNumber);
  });
}

exports.extractDimensions = extractDimensions;