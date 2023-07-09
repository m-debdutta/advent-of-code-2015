const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');
const { Santa } = require('../src/santa');

describe('santa', () => {
  it('should deliver present to the North of the starting house', () => {
    const startingLocation = { x: 0, y: 0 };
    const santa = new Santa(startingLocation);

    santa.moveNorth();

    deepStrictEqual(santa.getCurrentLocation(), { x: 0, y: 1 });
  });

  it('should deliver present to the South of the starting house', () => {
    const startingLocation = { x: 0, y: 0 };
    const santa = new Santa(startingLocation);

    santa.moveSouth();

    deepStrictEqual(santa.getCurrentLocation(), { x: 0, y: -1 });
  });

  it('should deliver present to the East of the starting house', () => {
    const startingLocation = { x: 0, y: 0 };
    const santa = new Santa(startingLocation);

    santa.moveEast();

    deepStrictEqual(santa.getCurrentLocation(), { x: 1, y: 0 });
  });

  it('should deliver present to the West of the starting house', () => {
    const startingLocation = { x: 0, y: 0 };
    const santa = new Santa(startingLocation);

    santa.moveWest();

    deepStrictEqual(santa.getCurrentLocation(), { x: -1, y: 0 });
  });

  it('should deliver present to two house north of the starting house', () => {
    const startingLocation = { x: 0, y: 0 };
    const santa = new Santa(startingLocation);

    santa.moveNorth();
    santa.moveNorth();

    deepStrictEqual(santa.getCurrentLocation(), { x: 0, y: 2 });
  });
});