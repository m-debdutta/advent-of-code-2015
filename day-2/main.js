const { calculatePaperToBeOrdered } = require("./src/calculate-stationary");

const main = () => {
  const giftSizes = '2x3x4\n1x1x1';
  const totalPaperRequired = calculatePaperToBeOrdered(giftSizes);

  console.log('Total paper required for gift wrapping : ', totalPaperRequired);
}

main();