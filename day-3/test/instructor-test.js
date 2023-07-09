const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const { Santa } = require('../src/santa');
const { Instructor } = require('../src/instructor');

describe('Instructor', () => {
  describe('visitedHouseCount', () => {
    it('should visit two house when santa is asked to deliver present to the house north of the current house', () => {
      const initialLocation = { x: 0, y: 0 };
      const instructions = '^';
      const santa = new Santa(initialLocation)
      const elf = new Instructor(santa);

      elf.direct(instructions);

      strictEqual(elf.visitedHouseCount(), 2);
    });

    it('should visit two house when santa is asked to deliver present to the same house twice', () => {
      const initialLocation = { x: 0, y: 0 };
      const instructions = '^v';
      const santa = new Santa(initialLocation)
      const elf = new Instructor(santa);

      elf.direct(instructions);

      strictEqual(elf.visitedHouseCount(), 2);
    });
  });
});