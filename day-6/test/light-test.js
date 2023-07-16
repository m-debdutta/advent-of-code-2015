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
      const lightStatus = light.state;

      assert.strictEqual(lightStatus, true);
    });
  });
});