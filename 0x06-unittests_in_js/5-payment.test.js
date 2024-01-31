const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const chai = require('chai');
const { expect } = chai;

describe('hooks', () => {
  let logSpy;
    beforeEach(() => {
        logSpy = sinon.spy(console, 'log');
    });
    afterEach(() => {
        sinon.restore();
    });

  it('should test sendPaymentRequestToApi(100,20)', () => {
    sendPaymentRequestToApi(100, 20)
    expect(logSpy.calledWith('The total is: 120')).to.be.true;
    expect(logSpy.calledOnce).to.be.true;
  });

  it('should test sendPaymentRequestToApi(10,10)', () => {
    sendPaymentRequestToApi(10, 10)
    expect(logSpy.calledWith('The total is: 20')).to.be.true;
    expect(logSpy.calledOnce).to.be.true;
  });
});
