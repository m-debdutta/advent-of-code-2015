const sortAscending = ([...list]) => {
  return list.sort((a, b) => a - b);
}

const areaOfRectangle = (length, breadth) => {
  return length * breadth;
}

const areaOfSmallestFaceOfCuboid = ([...dimension]) => {
  const [smallestSide, secondSmallestSide] = sortAscending(dimension);

  return areaOfRectangle(smallestSide, secondSmallestSide);
}

const surfaceAreaOfCuboid = ([l, w, h]) =>
  2 * (
    areaOfRectangle(l, w) +
    areaOfRectangle(w, h) +
    areaOfRectangle(l, h)
  );

module.exports = {
  surfaceAreaOfCuboid,
  areaOfSmallestFaceOfCuboid
};