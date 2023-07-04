const instructionSet = {
  '(': 1,
  ')': -1
}

const finalFloorNumber = (instructions) => {
  return instructions.reduce((currentFloor, instruction) => {
    return currentFloor + instructionSet[instruction];
  }, 0);
}

const findFirstBasementEntry = (instructions) => {
  let currentFloor = 0;
  let index = 0;
  while (currentFloor !== -1) {
    const instruction = instructions[index];
    currentFloor += instructionSet[instruction];
    index++;
    
    if (index > instructions.length) {
      return -1;
    } 
  }

  return index;
}

const main = function () {
  const puzzle = '(((((((((((((((((((((((((()))))';
  const instructions = puzzle.split('');
  const deliveryFloorNumber = finalFloorNumber(instructions);
  const firstBasementEntry = findFirstBasementEntry(instructions);

  console.log(deliveryFloorNumber, firstBasementEntry);
}

main();