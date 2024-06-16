const { expect } = require('chai');
const { fork } = require('child_process');
const request = require('request');

/* eslint-disable no-undef */
const API_MODULE = './api.js';
const PORT = 7865;
const URL = `http://127.0.0.1:${PORT}`;

describe('express api server', function () {
/*   let running = false;
  let apiProcess;

  before(function () {
    return new Promise((resolve) => {
      apiProcess = fork(API_MODULE, { stdio: ['pipe', 'inherit', 'ignore', 'ipc'] })
        .on('close', () => {
          running = true;
          resolve();
        });

      setTimeout(resolve, 350);
    });
  });

  after(function () {
    if (!running) {
      apiProcess.kill();
    }
  }); */

  it('get "/" route returns the correct data', function (done) {
    request.get(`${URL}/`, (err, res, body) => {
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('get "/" route response has the correct status code', function (done) {
    request.get(`${URL}/`, (err, res) => {
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });
});
