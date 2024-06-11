const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

before(function () {
  sinon.spy(console, 'log');
  sinon.stub(Utils, 'calculateNumber').returns(10);
});

after(function () {
  Utils.calculateNumber.restore();
  console.log.restore();
});

describe("sendPaymentRequestToApi", function() {
  it("Correct output", function() {
    sendPaymentRequestToApi(100, 20);

    expect(console.log.calledWith('The total is: 10')).to.be.true;
  });

  it('Utils.calculateNumber is called with the right args', function() {
    expect(Utils.calculateNumber.calledOnceWith('SUM', 100, 20)).to.be.true;
  })
});
