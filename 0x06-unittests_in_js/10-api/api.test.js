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

  it('Checks the available payments', function (done) {
    request.get('http://localhost:7865/available_payments', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });

  it('Checks the available payments', function (done) {
    request.get('http://localhost:7865/availablepayments', (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Responds with 200', (done) => {
    const form = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {
        userName: 'Nenye',
      },
    };

    request(form, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome :Nenye');
      done();
    });
  });

  it('Responds with 200 and correct name Chidi', (done) => {
    const form = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {
        userName: 'Chidi',
      },
    };

    request(form, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome :Chidi');
      done();
    });
  });

  it('Responds with 404 and incorrect localhost:7865/login/go', (done) => {
    const form = {
      url: 'http://localhost:7865/login/go',
      method: 'POST',
      json: {
        userName: 'Nenye',
      },
    };

    request(form, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>Cannot POST /login/go</pre>\n</body>\n</html>\n');
      done();
    });
  });
});
