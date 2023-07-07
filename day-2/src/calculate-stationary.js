const { extractDimensions } = require("./dimension-extractor");
const {
  surfaceAreaOfCuboid,
  areaOfSmallestFaceOfCuboid
} = require("../utilities/math-utils");

const calculateAreaOfGiftWrapper = (dimension) => {
  const areaOfSlack = areaOfSmallestFaceOfCuboid(dimension);
  const surfaceAreaOfGift = surfaceAreaOfCuboid(dimension);

  return surfaceAreaOfGift + areaOfSlack;
}

const calculateTotalWrapperRequired = (giftBoxSizes) => {
  const dimensions = extractDimensions(giftBoxSizes);

  return dimensions.reduce((paperRequired, dimension) => {
    return paperRequired + calculateAreaOfGiftWrapper(dimension);
  }, 0);
}

module.exports = { calculateTotalWrapperRequired, calculateAreaOfGiftWrapper };