const fs = require('fs');
const { calculateTotalWrapperRequired } = require("./src/calculate-stationary");

const getGiftBoxSizes = () => {
  return fs.readFileSync('./resources/giftSizes.txt', 'utf-8');
}

const main = () => {
  const giftBoxSizes = getGiftBoxSizes();
  const totalPaperRequired = calculateTotalWrapperRequired(giftBoxSizes);

  console.log('Total paper required for wrapping gifts : ', totalPaperRequired, 'sq.feets');
}

main();