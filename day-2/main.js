const fs = require('fs');
const { totalWrapperRequired, totalRibbonRequired } = require("./src/calculate-stationary");

const getGiftBoxSizes = () => {
  return fs.readFileSync('./resources/giftSizes.txt', 'utf-8');
};

const main = () => {
  const giftBoxSizes = getGiftBoxSizes();
  console.log('Total paper required : ', totalWrapperRequired(giftBoxSizes), 'sq.feet');
  console.log('Total ribbon required : ', totalRibbonRequired(giftBoxSizes), 'feet');
};

main();