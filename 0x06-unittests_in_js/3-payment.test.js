const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const chai = require('chai');
const { expect } = chai;

describe('sendPaymentRequestToApi', () => {
  it('should test sendPaymentRequestToApi', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true
    calculateNumberSpy.restore();
  });
});
