const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it("returns a JSON response on success", function (done) {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res.data).to.be.equal('Successful response from the API');
        done();
      });
  });
});
