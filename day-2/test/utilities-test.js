const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const { surfaceAreaOfCuboid, areaOfSmallestFaceOfCuboid } = require('../utilities/math-utils.js');


describe('surfaceAreaOfCuboid', () => {
  it('should give 0 when there in no cuboid', () => {
    const actual = surfaceAreaOfCuboid(0, 0, 0);
    const expected = 0;

    strictEqual(actual, expected);
  });

  it('should give 6 when all sides of cuboid is one unit', () => {
    const actual = surfaceAreaOfCuboid(1, 1, 1);
    const expected = 6;

    strictEqual(actual, expected);
  });

  it('should be the sum of area of all sides', () => {
    strictEqual(surfaceAreaOfCuboid(2, 3, 4), 52);
    strictEqual(surfaceAreaOfCuboid(1, 1, 10), 42);
  });
});

describe('areaOfSmallestFaceOfCuboid', () => {
  it('should be 0, when there is no cuboid', () => {
    strictEqual(areaOfSmallestFaceOfCuboid(0, 0, 0), 0);
  });

  it('should be 1, when the two smallest sides are of unit length', () => {
    strictEqual(areaOfSmallestFaceOfCuboid(1, 1, 2), 1);
  });

  it('should be the product of the two small side of the cuboid', () => {
    strictEqual(areaOfSmallestFaceOfCuboid(8, 3, 2), 6);
    strictEqual(areaOfSmallestFaceOfCuboid(8, 1, 5), 5);
  });
});