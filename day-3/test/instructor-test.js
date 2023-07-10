const { describe, it } = require('node:test');
const assert = require('assert');
const { Worker } = require('../src/worker');
const { Instructor } = require('../src/instructor');

describe('Instructor', () => {
  describe('visitedHouseCount', () => {
    it('should be 2, when santa is directed to deliver present to a house north of the initial house', () => {
      const initialLocation = { x: 0, y: 0 };
      const directions = '^';
      const santa = new Worker(initialLocation)
      const elf = new Instructor([santa]);

      elf.direct(directions);

      assert.strictEqual(elf.visitedHouseCount(), 2);
      assert.deepStrictEqual(santa.currentLocation, { x: 0, y: 1 });
    });

    it('should be 2, when santa is directed to deliver present to a house south of the initial house', () => {
      const initialLocation = { x: 0, y: 0 };
      const directions = 'v';
      const santa = new Worker(initialLocation)
      const elf = new Instructor([santa]);

      elf.direct(directions);

      assert.strictEqual(elf.visitedHouseCount(), 2);
      assert.deepStrictEqual(santa.currentLocation, { x: 0, y: -1 });
    });

    it('should be 2, when santa is directed to deliver present to a house east of the initial house', () => {
      const initialLocation = { x: 0, y: 0 };
      const directions = '>';
      const santa = new Worker(initialLocation)
      const elf = new Instructor([santa]);

      elf.direct(directions);

      assert.strictEqual(elf.visitedHouseCount(), 2);
      assert.deepStrictEqual(santa.currentLocation, { x: 1, y: 0 });
    });

    it('should be 2, when santa is directed to deliver present to a house west of the initial house', () => {
      const initialLocation = { x: 0, y: 0 };
      const directions = '<';
      const santa = new Worker(initialLocation)
      const elf = new Instructor([santa]);

      elf.direct(directions);

      assert.strictEqual(elf.visitedHouseCount(), 2);
      assert.deepStrictEqual(santa.currentLocation, { x: -1, y: 0 });
    });

    it('should be 2, when santa is directed to revisit the starting house after one instruction', () => {
      const initialLocation = { x: 0, y: 0 };
      const directions = '^v';
      const santa = new Worker(initialLocation)
      const elf = new Instructor([santa]);

      elf.direct(directions);

      assert.strictEqual(elf.visitedHouseCount(), 2);
    });

    it('should be 3, when santa and roboSanta is directed to deliver present to the next house in different direction', () => {
      const initialLocation = { x: 0, y: 0 };
      const santa = new Worker(initialLocation);
      const roboSanta = new Worker(initialLocation);
      const directions = '^v';
      const elf = new Instructor([santa, roboSanta]);

      elf.direct(directions);

      assert.strictEqual(elf.visitedHouseCount(), 3);
    });

    it('should be 3, when santa and roboSanta revisit the starting house after one instruction in different direction', () => {
      const initialLocation = { x: 0, y: 0 };
      const santa = new Worker(initialLocation);
      const roboSanta = new Worker(initialLocation);
      const directions = '^>v<';
      const elf = new Instructor([santa, roboSanta]);

      elf.direct(directions);

      assert.strictEqual(elf.visitedHouseCount(), 3);
    });

    it('should be 11, when Santa and Robo-Santa deliver present to 5 houses each, in different direction', () => {
      const initialLocation = { x: 0, y: 0 };
      const santa = new Worker(initialLocation);
      const roboSanta = new Worker(initialLocation);
      const directions = '^v^v^v^v^v';
      const elf = new Instructor([santa, roboSanta]);

      elf.direct(directions);

      assert.strictEqual(elf.visitedHouseCount(), 11);
    });
  });


});