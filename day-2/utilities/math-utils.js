const sortAscending = ([...list]) => {
  return list.sort((a, b) => a - b);
};

const perimeterOfRectangle = (length, breadth) => 2 * (length + breadth);

const areaOfRectangle = (length, breadth) => length * breadth;

const volumeOfCuboid = (length, breadth, height) => length * breadth * height;

const perimeterOfSmallestFaceOfCuboid = (...dimension) => {
  const [smallestSide, secondSmallestSide] = sortAscending(dimension);
  
  return perimeterOfRectangle(smallestSide, secondSmallestSide);
};

const areaOfSmallestFaceOfCuboid = (...dimension) => {
  const [smallestSide, secondSmallestSide] = sortAscending(dimension);

  return areaOfRectangle(smallestSide, secondSmallestSide);
};

const surfaceAreaOfCuboid = (l, w, h) =>
  2 * (
    areaOfRectangle(l, w) +
    areaOfRectangle(w, h) +
    areaOfRectangle(l, h)
  );

module.exports = {
  volumeOfCuboid,
  surfaceAreaOfCuboid,
  areaOfSmallestFaceOfCuboid,
  perimeterOfSmallestFaceOfCuboid
};