class Santa {
  #currentFloor;

  constructor(initialFloor) {
    this.#currentFloor = initialFloor;
  }

  moveUp(){
    this.#currentFloor++;
  }

  moveDown(){
    this.#currentFloor--;
  }

  currentFloor() {
    return this.#currentFloor;
  }
}

exports.Santa = Santa;