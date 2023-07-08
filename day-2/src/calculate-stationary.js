const { extractDimensions } = require("./dimension-extractor");
const {
  volumeOfCuboid,
  surfaceAreaOfCuboid,
  areaOfSmallestFaceOfCuboid,
  perimeterOfSmallestFaceOfCuboid
} = require("../utilities/math-utils");

const areaOfGiftWrapper = (dimension) => {
  const areaOfSlack = areaOfSmallestFaceOfCuboid(...dimension);
  const surfaceAreaOfGift = surfaceAreaOfCuboid(...dimension);

  return surfaceAreaOfGift + areaOfSlack;
};

const totalWrapperRequired = (giftBoxSizes) => {
  const dimensions = extractDimensions(giftBoxSizes);

  return dimensions.reduce((paperRequired, dimension) =>
    paperRequired + areaOfGiftWrapper(dimension), 0);
};

const lengthOfRibbon = (dimension) => {
  const perimeterOfSmallestFace = perimeterOfSmallestFaceOfCuboid(...dimension);
  const ribbonForBow = volumeOfCuboid(...dimension);

  return perimeterOfSmallestFace + ribbonForBow;
};

const totalRibbonRequired = (giftBoxSizes) => {
  const dimensions = extractDimensions(giftBoxSizes);

  return dimensions.reduce((totalRibbonRequired, dimension) =>
    totalRibbonRequired + lengthOfRibbon(dimension), 0);
};

module.exports = {
  totalWrapperRequired,
  totalRibbonRequired,
};