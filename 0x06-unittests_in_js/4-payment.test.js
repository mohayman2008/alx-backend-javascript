const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  it('Correct output', function () {
    sinon.spy(console, 'log');
    sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(console.log.calledOnceWith('The total is: 10')).to.be.true;

    console.log.restore();
  });

  it('Utils.calculateNumber is called with the right args', function () {
    expect(Utils.calculateNumber.calledOnceWith('SUM', 100, 20)).to.be.true;
    Utils.calculateNumber.restore();
  });
});
