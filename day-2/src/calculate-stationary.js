const toNumber = a => +a;

const findSurfaceAreaOfCuboid = (l, w, h) => (2 * l * w) + (2 * w * h) + (2 * h * l);

const parseDimension = (giftSize) => {
  const dimension = giftSize.split('x').map(toNumber);
  dimension.sort((a, b) => a - b);
  return dimension;
}

const calculatePaperToBeOrdered = (giftSize) => {
  const [l, w, h] = parseDimension(giftSize);
  const slackPaper = l * w;
  const paperToWrap = findSurfaceAreaOfCuboid(l, w, h);
  const paperRequired = paperToWrap + slackPaper;
  return paperRequired;
}

module.exports = { calculatePaperToBeOrdered, parseDimension, toNumber, findSurfaceAreaOfCuboid };