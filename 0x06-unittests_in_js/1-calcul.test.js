const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('Test Suite', () => {
  it("should add two numbers", () => {
    const a = 1.4;
    const b = 4.5;
    assert.equal(calculateNumber('SUM', a, b), 6);
  });

  it("should subtract two numbers", () => {
    const a = -2;
    const b = 4.5;
    assert.equal(calculateNumber('SUBTRACT', a, b), -7);
  });

  it("should subtract two numbers", () => {
    const a = 1.4;
    const b = 4.5;
    assert.equal(calculateNumber('SUBTRACT', a, b), -4);
  });

  it("should divide two numbers", () => {
    const a = 1.4;
    const b = 4.5;
    assert.equal(calculateNumber('DIVIDE', a, b), 0.2);
  });
  it("should divide two numbers", () => {
    const a = 2.5;
    const b = 4;
    assert.equal(calculateNumber("DIVIDE", a, b), 0.75);
  });

  it("should divide two numbers", () => {
    const a = 1.5;
    const b = 0;
    assert.equal(calculateNumber('DIVIDE', a, b), 'Error');
  });
});
