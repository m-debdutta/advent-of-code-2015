const fs = require('fs');
const { Instructor } = require("./src/instructor");
const { Worker } = require("./src/santa");

const getDirections = () => {
  return fs.readFileSync('./resources/directions.txt', 'utf-8');
}

const previousYear = (startingHouseLocation, directions) => {
  const santa = new Worker(startingHouseLocation);
  const elf = new Instructor([santa]);
  
  elf.direct(directions);
  return elf.visitedHouseCount();
}

const thisYear = (startingHouseLocation, directions) => {
  const santa = new Worker(startingHouseLocation);
  const roboSanta = new Worker(startingHouseLocation);
  const elf = new Instructor([santa, roboSanta]);

  elf.direct(directions);
  return elf.visitedHouseCount();
}

const main = () => {
  const directions = getDirections();
  const startingHouseLocation = { x: 0, y: 0 };

  console.log('No of house visited by Santa previous year is : ', previousYear(startingHouseLocation, directions));
  console.log('No of house visited by Santa this year is : ', thisYear(startingHouseLocation, directions));
}

main();