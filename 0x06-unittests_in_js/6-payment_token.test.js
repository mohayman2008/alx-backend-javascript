const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('getPaymentTokenFromAPI(true) returns the correct result', function (done) {
    getPaymentTokenFromAPI(true)
      .then((res) => expect(res).to.be.eql({ data: 'Successful response from the API' }))
      .then(() => done());
  });

  it('getPaymentTokenFromAPI(false) returns the correct result', function () {
    expect(getPaymentTokenFromAPI(false)).to.be.equal(null);
  });
});
