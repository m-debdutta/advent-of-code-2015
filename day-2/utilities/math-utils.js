const sortAscending = ([...list]) => {
  return list.sort((a, b) => a - b);
}

const area = (length, breadth) => {
  return length * breadth;
}

const calculateSmallestAreaOfCuboid = ([...dimension]) => {
  const [smallestSide, secondSmallestSide] = sortAscending(dimension);

  return area(smallestSide, secondSmallestSide);
}

const calculateSurfaceAreaOfCuboid = ([l, w, h]) => 2 * (area(l, w) + area(w, h) + area(l, h));

module.exports = {
  sortAscending,
  calculateSurfaceAreaOfCuboid,
  calculateSmallestAreaOfCuboid
};