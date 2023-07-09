const fs = require('fs');
const { Instructor } = require("./src/instructor");
const { Santa } = require("./src/santa");

const getDirections = () => {
  return fs.readFileSync('./resources/directions.txt', 'utf-8');
}

const main = () => {
  const directions = getDirections();
  // const directions = '^v';

  const initialPosition = { x: 0, y: 0 };
  
  const santa = new Santa(initialPosition);
  // const roboSanta = new Santa(initialPosition);
  const elf = new Instructor(santa);

  elf.direct(directions);
  const visitedHouseCount = elf.visitedHouseCount();

  console.log('No of house visited by Santa is : ', visitedHouseCount);
}

main();