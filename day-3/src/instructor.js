class Instructor {
  #workers;
  #visitedHouses;
  #currentWorker;

  constructor([...workers]) {
    this.#workers = workers;
    this.#currentWorker = this.#workers[0];
    this.#visitedHouses = new Set();
    this.#updateVisitedHouses();
  }
  
  #moveTo(direction) {
    const directionSet = {
      '^': () => this.#currentWorker.moveNorth(),
      'v': () => this.#currentWorker.moveSouth(),
      '>': () => this.#currentWorker.moveEast(),
      '<': () => this.#currentWorker.moveWest()
    };
    
    directionSet[direction]();
  }

  #updateVisitedHouses() {
    const currentHouse = this.#currentWorker.currentLocation;
    this.#visitedHouses.add(JSON.stringify(currentHouse));
  }
  
  #getCurrentWorker(index) {
    return this.#workers[index % this.#workers.length];
  }

  direct(directions) {
    [...directions].forEach((direction, index) => {
      this.#currentWorker = this.#getCurrentWorker(index);
      this.#moveTo(direction);
      this.#updateVisitedHouses();
    });
  }

  visitedHouseCount() {
    return this.#visitedHouses.size;
  }
}

exports.Instructor = Instructor;