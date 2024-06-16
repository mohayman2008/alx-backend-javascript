const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  beforeEach(function () {
    sinon.spy(console, 'log');
  });

  afterEach(function () {
    console.log.restore();
  });

  it('sendPaymentRequestToAPI(100, 20) printing out the correct result', function () {
    sendPaymentRequestToApi(100, 20);

    expect(console.log.calledOnceWith('The total is: 120')).to.be.true;
  });

  it('sendPaymentRequestToAPI(10, 10) printing out the correct result', function () {
    sendPaymentRequestToApi(10, 10);

    expect(console.log.calledOnceWith('The total is: 20')).to.be.true;
  });
});
