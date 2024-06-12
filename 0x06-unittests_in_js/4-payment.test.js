const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  let stub;

  it('correct output', function () {
    const conSpy = sinon.spy(console, 'log');
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(conSpy.calledOnceWith('The total is: 10')).to.be.true;

    conSpy.restore();
  });

  it('function "Utils.calculateNumber" is called with the right args', function () {
    expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;
    stub.restore();
  });
});
