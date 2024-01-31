const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const { expect } = chai;

describe('Test Suite', () => {
  it("should add two numbers", () => {
    const a = 1.4;
    const b = 4.5;
    expect(calculateNumber('SUM', a, b)).to.equal(6);
  });

  it("should subtract two numbers", () => {
    const a = -2;
    const b = 4.5;
    expect(calculateNumber('SUBTRACT', a, b)).to.equal(-7);
  });

  it("should subtract two numbers", () => {
    const a = 1.4;
    const b = 4.5;
    expect(calculateNumber('SUBTRACT', a, b)).to.equal(-4);
  });

  it("should divide two numbers", () => {
    const a = 1.4;
    const b = 4.5;
    expect(calculateNumber('DIVIDE', a, b)).to.equal(0.2);
  });
  it("should divide two numbers", () => {
    const a = 2.5;
    const b = 4;
    expect(calculateNumber("DIVIDE", a, b)).to.equal(0.75);
  });

  it("should divide two numbers", () => {
    const a = 1.5;
    const b = 0;
    expect(calculateNumber('DIVIDE', a, b)).to.equal('Error');
  });
});
