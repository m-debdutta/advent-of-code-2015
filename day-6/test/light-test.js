const { describe, it } = require('node:test');
const assert = require('assert');

const { Light } = require('../src/light');

describe('Light', () => {
  describe('state', () => {
    it('should be off, when light is not operated', () => {
      const light = new Light();

      assert.strictEqual(light.state, false);
    });
  });

  describe('turnOn', () => {
    it('should turn the light on, when the light was off', () => {
      const light = new Light();

      light.turnOn();

      assert.strictEqual(light.state, true);
    });

    it('should not change the state of the light, when light is already turned on', () => {
      const light = new Light();

      light.turnOn();
      light.turnOn();

      assert.strictEqual(light.state, true);
    });
  });
});