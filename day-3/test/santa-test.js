const { describe, it } = require('node:test');
const assert = require('assert');
const { Worker } = require('../src/santa');

describe('santa', () => {
  it('should deliver present to the North of the starting house', () => {
    const startingLocation = { x: 0, y: 0 };
    const santa = new Worker(startingLocation);

    santa.moveNorth();

    assert.deepStrictEqual(santa.currentLocation, { x: 0, y: 1 });
  });

  it('should deliver present to the South of the starting house', () => {
    const startingLocation = { x: 0, y: 0 };
    const santa = new Worker(startingLocation);

    santa.moveSouth();

    assert.deepStrictEqual(santa.currentLocation, { x: 0, y: -1 });
  });

  it('should deliver present to the East of the starting house', () => {
    const startingLocation = { x: 0, y: 0 };
    const santa = new Worker(startingLocation);

    santa.moveEast();

    assert.deepStrictEqual(santa.currentLocation, { x: 1, y: 0 });
  });

  it('should deliver present to the West of the starting house', () => {
    const startingLocation = { x: 0, y: 0 };
    const santa = new Worker(startingLocation);

    santa.moveWest();

    assert.deepStrictEqual(santa.currentLocation, { x: -1, y: 0 });
  });

  it('should deliver present to two house north of the starting house', () => {
    const startingLocation = { x: 0, y: 0 };
    const santa = new Worker(startingLocation);

    santa.moveNorth();
    santa.moveNorth();

    assert.deepStrictEqual(santa.currentLocation, { x: 0, y: 2 });
  });
});