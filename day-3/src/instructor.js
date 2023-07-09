class Instructor {
  #santa;
  #visitedHouses;
  #instructionSet;

  constructor(santa) {
    this.#santa = santa;
    this.#visitedHouses = new Set();
    this.#updateVisitedHouses();
    this.#instructionSet = {
      '^': () => this.#santa.moveNorth(),
      'v': () => this.#santa.moveSouth(),
      '>': () => this.#santa.moveEast(),
      '<': () => this.#santa.moveWest()
    }
  }

  #updateVisitedHouses() {
    const currentHouse = this.#santa.getCurrentLocation();
    this.#visitedHouses.add(JSON.stringify(currentHouse));
  }

  direct(instructions) {
    [...instructions].forEach((instruction) => {
      this.#instructionSet[instruction]();
      this.#updateVisitedHouses();
    });
  }

  visitedHouseCount() {
    return this.#visitedHouses.size;
  }
}

exports.Instructor = Instructor;