const {
  calculateSurfaceAreaOfCuboid,
  calculateSmallestAreaOfCuboid
} = require("../utilities/math-utils");
const { extractDimensions } = require("./dimension-extractor");


const calculatePaperToBeOrdered = (giftSizes) => {
  const dimensions = extractDimensions(giftSizes);

  return dimensions.reduce((paperRequired, dimension) => {
    const slackArea = calculateSmallestAreaOfCuboid(dimension);
    const surfaceAreaOfGift = calculateSurfaceAreaOfCuboid(dimension);

    return paperRequired + surfaceAreaOfGift + slackArea;
  }, 0);
}

exports.calculatePaperToBeOrdered = calculatePaperToBeOrdered;