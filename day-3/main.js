const fs = require('fs');
const { countHousesVisitedBySanta, countHousesVisitedByTwoSantas } = require('./src/visited-houses');

const getDirections = () => {
  return fs.readFileSync('./resources/directions.txt', 'utf-8');
}

const main = () => {
  const directions = getDirections();
  const housesVisitedBySanta = countHousesVisitedBySanta(directions);
  const housesVisitetByTwoSantas = countHousesVisitedByTwoSantas(directions);

  console.log('No of house visited by Santa previous year is : ', housesVisitedBySanta);
  console.log('No of house visited by Santa this year is : ', housesVisitetByTwoSantas);
}

main();