const { expect } = require('chai');
const { fork } = require('child_process');
const request = require('request');

/* eslint-disable no-undef */
const API_MODULE = './api.js';
const PORT = 7865;
const URL = `http://localhost:${PORT}`;

let running = false;
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
});

describe('express api server', function () {
  describe('route "/"', function () {
    it('get "/" returns the correct data', function (done) {
      request.get(`${URL}/`, (err, res, body) => {
        expect(body).to.be.equal('Welcome to the payment system');
        done();
      });
    });

    it('get "/" response has the correct status code', function (done) {
      request.get(`${URL}/`, (err, res) => {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
    });
  });

  describe('/cart/:id', function () {
    it('get "/cart/:id" route returns the correct data when <id> is number', function (done) {
      request.get(`${URL}/cart/123`, (err, res, body) => {
        expect(body).to.be.equal('Payment methods for cart 123');
        done();
      });
    });

    it('get "/" route response has the correct status code when <id> is number', function (done) {
      request.get(`${URL}/cart/123`, (err, res) => {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
    });

    it('get "/" route response has the correct status code when <id> is not number', function (done) {
      request.get(`${URL}/cart/abc`, (err, res) => {
        expect(res.statusCode).not.to.be.equal(200);
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    });
  });
});
