const { describe, it } = require('node:test');
const assert = require('assert');
const { countHousesVisitedBySanta, countHousesVisitedByTwoSantas } = require('../src/visited-houses');

describe('countHousesVisitedBySanta', () => {
  it('should be 1, when santa does not visit any other house', () => {
    assert.strictEqual(countHousesVisitedBySanta(''), 1);
  });
  
  it('should be 2, when santa visit one house in any direction', () => {
    assert.strictEqual(countHousesVisitedBySanta('^'), 2);
    assert.strictEqual(countHousesVisitedBySanta('v'), 2);
    assert.strictEqual(countHousesVisitedBySanta('>'), 2);
    assert.strictEqual(countHousesVisitedBySanta('<'), 2);
  });
});

describe('countHousesVisitedByTwoSantas', () => {
  it('should be 1, when none of the santa visited any other house', () => {
    assert.strictEqual(countHousesVisitedByTwoSantas(''), 1);
  });

  it('should be 2, when one santa does not visit any other house and other santa visit only one house', () => {
    assert.strictEqual(countHousesVisitedByTwoSantas('^'), 2);
  });
  
  it('should be 2, when both the santa gets the same directions', () => {
    assert.strictEqual(countHousesVisitedByTwoSantas('^^'), 2);
    assert.strictEqual(countHousesVisitedByTwoSantas('>>'), 2);
    assert.strictEqual(countHousesVisitedByTwoSantas('<<'), 2);
    assert.strictEqual(countHousesVisitedByTwoSantas('vv'), 2);
  });

  it('should be 3, when each santa visit one house in different directions', () => {
    assert.strictEqual(countHousesVisitedByTwoSantas('<>'), 3);
    assert.strictEqual(countHousesVisitedByTwoSantas('^>'), 3);
    assert.strictEqual(countHousesVisitedByTwoSantas('v>'), 3);
    assert.strictEqual(countHousesVisitedByTwoSantas('^v'), 3);
  });
});