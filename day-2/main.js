const calculatePaperRequired = (dimension) => {
  const arrangedDimension = dimension.slice().sort((a, b) => a - b);
  const [a, b, c] = arrangedDimension;
  return 2 * (a * b + a * c + b * c) + a * b;
}

const main = function () {
  const dimensions = [[20, 3, 11]];
  return dimensions.reduce((papers, dimension) => {
    return papers + calculatePaperRequired(dimension);
  }, 0);
}

console.log(main());
