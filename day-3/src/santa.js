class Santa {
  #currentLocation;

  constructor(startingLocation) {
    this.#currentLocation = startingLocation;
  }

  #updateCurrentLocation(dx, dy) {
    this.#currentLocation.x += dx;
    this.#currentLocation.y += dy;
  }

  moveNorth() {
    this.#updateCurrentLocation(0, 1);
  }

  moveSouth() {
    this.#updateCurrentLocation(0, -1);
  }

  moveEast() {
    this.#updateCurrentLocation(1, 0);
  }

  moveWest() {
    this.#updateCurrentLocation(-1, 0);
  }

  getCurrentLocation() {
    return { ...this.#currentLocation };
  }
}

exports.Santa = Santa;