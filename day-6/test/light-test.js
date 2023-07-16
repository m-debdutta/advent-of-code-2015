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
});