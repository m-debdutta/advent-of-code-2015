const sortAscending = ([...list]) => {
  return list.sort((a, b) => a - b);
};

const volumeOfCuboid = (length, breadth, height) => length * breadth * height;

const surfaceAreaOfCuboid = (l, w, h) =>
  2 * (
    areaOfRectangle(l, w) +
    areaOfRectangle(w, h) +
    areaOfRectangle(l, h)
  );

const perimeterOfRectangle = (length, breadth) => 2 * (length + breadth);

const perimeterOfSmallestFaceOfCuboid = (l, b, h) => {
  const [smallestSide, secondSmallestSide] = sortAscending([l, b, h]);

  return perimeterOfRectangle(smallestSide, secondSmallestSide);
};

const areaOfRectangle = (length, breadth) => length * breadth;

const areaOfSmallestFaceOfCuboid = (l, b, h) => {
  const [smallestSide, secondSmallestSide] = sortAscending([l, b, h]);

  return areaOfRectangle(smallestSide, secondSmallestSide);
};

module.exports = {
  volumeOfCuboid,
  surfaceAreaOfCuboid,
  areaOfSmallestFaceOfCuboid,
  perimeterOfSmallestFaceOfCuboid
};