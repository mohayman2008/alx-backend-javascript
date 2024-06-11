const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

after(function() {
  Utils.calculateNumber.restore();
  console.log.restore();
});

describe("sendPaymentRequestToApi", function() {
  it("Correct output", function() {
    const expected = Utils.calculateNumber('SUM', 100, 20);
    sinon.spy(console, 'log');
    sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(console.log.called).to.be.true;
    const line = console.log.args[0].join(' ');
    const result = Number(line.match(/(?<=^The total is: )\d+$/)[0]);    

    expect(result).to.equal(expected);
  });
  it('Utils.calculateNumber is used', function() {
    expect(Utils.calculateNumber.calledOnce).to.be.true;
  })
});
