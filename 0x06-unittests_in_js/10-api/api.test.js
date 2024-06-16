const { expect } = require('chai');
const { fork } = require('child_process');
const request = require('request');

/* eslint-disable no-undef */
const API_MODULE = './api.js';
const PORT = 7865;
const URL = `http://127.0.0.1:${PORT}`;

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

  describe('route "/cart/:id"', function () {
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

  describe('route "/available_payments"', function () {
    it('get "/available_payments" returns the correct data', function (done) {
      request.get(`${URL}/available_payments`, (err, res, body) => {
        expect(JSON.parse(body)).to.be.eql({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
    });

    it('get "/available_payments" response has the correct status code', function (done) {
      request.get(`${URL}/available_payments`, (err, res) => {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
    });
  });

  describe('route "/login"', function () {
    it('post "/login" route returns the correct data with "{ "userName": "Judy" }" as payload', function (done) {
      request.post(`${URL}/login`, { json: true, body: { userName: 'Judy' } }, (err, res, body) => {
        expect(body).to.be.equal('Welcome Judy');
        done();
      });
    });

    it('post "/login" route returns the correct data with "{}" as payload', function (done) {
      request.post(`${URL}/login`, { json: true, body: {} }, (err, res, body) => {
        expect(body).to.be.equal('Welcome ');
        done();
      });
    });

    it('post "/login" route returns the correct data with no payload', function (done) {
      request.post(`${URL}/login`, (err, res, body) => {
        expect(body).to.be.equal('Welcome ');
        done();
      });
    });

    it('get "/" route response has the correct status code', function (done) {
      request.post(`${URL}/login`, (err, res) => {
        expect(res.statusCode).to.be.equal(200);
        done();
      });
    });
  });
});
