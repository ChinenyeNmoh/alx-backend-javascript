const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('Test Suite', () => {
  it("should add two numbers", () => {
    const a = 1;
    const b = 3;
    assert.strictEqual(calculateNumber(a, b), 4);
  });

  it("should add two numbers", () => {
    const a = 1;
    const b = 3.7;
    assert.strictEqual(calculateNumber(a, b), 5);
  });

  it("should add two numbers", () => {
    const a = 1.2;
    const b = 3.7;
    assert.strictEqual(calculateNumber(a, b), 5);
  });

  it("should add two numbers", () => {
    const a = 1.5;
    const b = 3.7;
    assert.strictEqual(calculateNumber(a, b), 6);
  });
});
