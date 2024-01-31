const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const chai = require('chai');
const { expect } = chai;

describe('sendPaymentRequestToApi', () => {
  it('should test sendPaymentRequestToApi', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    const logSpy = sinon.spy(console, 'log');
    calculateNumberStub.withArgs("SUM", 10, 20).returns(10);
    sendPaymentRequestToApi(100, 20)

    expect(calculateNumberStub.calledWith("SUM", 100, 20)).to.be.true;
    expect(logSpy.calledOnceWith('The total is: 10'));
    
    calculateNumberStub.restore();
    logSpy.restore();
  });
});
