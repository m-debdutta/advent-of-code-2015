const calculateWrapingPaper = (giftSize) => {
  const dimension = giftSize.split('x').map((a) => +a);
  dimension.sort((a, b) => a - b);
  const [l, w, h] = dimension;
  const paperRequired = (2 * l * w) + (2 * w * h) + (2 * h * l) + (l * w);
  const requiredWrapingPaper = paperRequired;
  return requiredWrapingPaper;
}

module.exports = { calculateWrapingPaper };