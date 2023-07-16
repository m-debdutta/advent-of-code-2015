class Light {
  #state;

  constructor() {
    this.#state = false;
  }

  get state() {
    return this.#state;
  }
}

exports.Light = Light;