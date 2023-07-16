class Light {
  #state;

  constructor() {
    this.#state = false;
  }

  turnOn(){
    this.#state = true;
  }

  turnOff(){
    this.#state = false;
  }

  toggle(){
    this.#state = !this.#state;
  }

  get state() {
    return this.#state;
  }
}

exports.Light = Light;