class Controller {
  #santa;
  #moveCount;
  #santaFirstVisitBasementPosition;

  constructor(santa) {
    this.#santa = santa;
    this.#moveCount = 0;
    this.#santaFirstVisitBasementPosition = -1;
  }

  #hasSantaEnteredBasementFirstTime() {
    return this.#santa.currentFloor() === -1 && this.#santaFirstVisitBasementPosition === -1;
  }

  run(instructions) {
    instructions.split('').forEach((instruction) => {
      if (instruction === "(") this.#santa.moveUp();

      if (instruction === ")") this.#santa.moveDown();

      this.#moveCount++;

      if (this.#hasSantaEnteredBasementFirstTime()) {
        this.#santaFirstVisitBasementPosition = this.#moveCount;
      }
    });
  }

  getFinalPosition() {
    return this.#santa.currentFloor();
  }

  getPositionOfSantaEnterBasement() {
    return this.#santaFirstVisitBasementPosition;
  }
}

exports.Controller = Controller;