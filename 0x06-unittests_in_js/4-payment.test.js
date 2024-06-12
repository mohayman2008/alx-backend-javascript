const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  it('calls console.log and Utils.calculateNumber with the correct args', function () {
    const conSpy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(conSpy.calledOnceWith('The total is: 10')).to.be.true;
    expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;

    stub.restore();
    conSpy.restore();
  });
});
