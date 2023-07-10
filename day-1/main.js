const fs = require('fs');
const { Controller } = require("./src/controller");
const { Santa } = require("./src/santa");

const getInstructions = () => {
  return fs.readFileSync('./resources/sample-file-1.txt', 'utf-8');
}

const main = function () {
  const instructions = getInstructions();
  const initialFloor = 0;

  const santa = new Santa(initialFloor);
  const santaController = new Controller(santa);

  santaController.run(instructions);
  const finalPosition = santaController.getFinalPosition();
  const firstBasementPosition = santaController.getPositionOfSantaEnterBasement();

  console.log('Final position of Santa : ', finalPosition);
  console.log('The position of the character that causes Santa to first enter the basement is : ', firstBasementPosition);
}

main();