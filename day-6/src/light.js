class Light {
  #state;

  constructor() {
    this.#state = false;
  }

  turnOn(){
    this.#state = true;
  }

  get state() {
    return this.#state;
  }
}

exports.Light = Light;