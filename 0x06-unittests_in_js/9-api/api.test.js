const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('API integration test', function () {
  const endpoint = 'http://localhost:7865';

  it('Checks the responses', function (done) {
    request.get(`${endpoint}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  const endpoint1 = 'http://localhost:7865/cart/12';
  it('Checks the cart responses', function (done) {
    request.get(`${endpoint1}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 12');
      done();
    });
  });

  const endpoint2 = 'http://localhost:7865/cart/go';
  it('Checks the failed cart responses', function (done) {
    request.get(`${endpoint2}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
