const toNumber = a => +a;

const parseDimension = (giftSize) => {
  const dimension = giftSize.split('x').map(toNumber);
  dimension.sort((a, b) => a - b);
  return dimension;
}

const calculatePaperToBeOrdered = (giftSize) => {
  const dimension = parseDimension(giftSize);
  const [l, w, h] = dimension;
  const slackPaper = l * w;
  const paperToWrap = (2 * l * w) + (2 * w * h) + (2 * h * l);
  const paperRequired = paperToWrap + slackPaper;
  return paperRequired;
}

module.exports = { calculatePaperToBeOrdered };


