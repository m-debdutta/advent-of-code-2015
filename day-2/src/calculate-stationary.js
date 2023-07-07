const { extractDimensions } = require("./dimension-extractor");
const {
  volumeOfCuboid,
  surfaceAreaOfCuboid,
  areaOfSmallestFaceOfCuboid,
  perimeterOfSmallestFaceOfCuboid
} = require("../utilities/math-utils");

const calculateAreaOfGiftWrapper = (dimension) => {
  const areaOfSlack = areaOfSmallestFaceOfCuboid(...dimension);
  const surfaceAreaOfGift = surfaceAreaOfCuboid(...dimension);

  return surfaceAreaOfGift + areaOfSlack;
};

const totalWrapperRequired = (giftBoxSizes) => {
  const dimensions = extractDimensions(giftBoxSizes);

  return dimensions.reduce((paperRequired, dimension) => {
    return paperRequired + calculateAreaOfGiftWrapper(dimension);
  }, 0);
};

const calculateLengthOfRibbon = (dimension) => {
  const perimeterOfSmallestFace = perimeterOfSmallestFaceOfCuboid(...dimension);
  const ribbonForBow = volumeOfCuboid(...dimension);
  return perimeterOfSmallestFace + ribbonForBow;
};

const totalRibbonRequired = (giftBoxSizes) => {
  const dimensions = extractDimensions(giftBoxSizes);

  return dimensions.reduce((totalRibbonRequired, dimension) => {
    return totalRibbonRequired + calculateLengthOfRibbon(dimension);
  }, 0);
};

module.exports = {
  totalWrapperRequired,
  totalRibbonRequired,
};