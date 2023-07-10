const { Instructor } = require("./instructor");
const { Worker } = require("./worker");

const countHousesVisitedBySanta = (directions) => {
  const startingHouseLocation = { x: 0, y: 0 };

  const santa = new Worker(startingHouseLocation);
  const elf = new Instructor([santa]);
  
  elf.direct(directions);
  return elf.visitedHouseCount();
}

const countHousesVisitedByTwoSantas = (directions) => {
  const startingHouseLocation = { x: 0, y: 0 };
  
  const santa = new Worker(startingHouseLocation);
  const roboSanta = new Worker(startingHouseLocation);
  const elf = new Instructor([santa, roboSanta]);

  elf.direct(directions);
  return elf.visitedHouseCount();
}

module.exports = { countHousesVisitedBySanta, countHousesVisitedByTwoSantas }