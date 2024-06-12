const assert = require('assert');
const calculateNumber = require('./0-calcul'); // eslint-disable-line no-unused-vars

const TESTS = {
  calculateNumber: [
    {
      testName: 'Case: <a> and <b> = 0',
      tests: [
        {
          inputs: [0, 0],
          expected: 0,
        },
      ],
    },
    {
      testName: 'Checking that <a> is rounded correctly',
      tests: [
        {
          inputs: [0.5, 1],
          expected: 2,
        },
        {
          inputs: [0.4, 1],
          expected: 1,
        },
        {
          inputs: [-0.6, 1],
          expected: 0,
        },
        {
          inputs: [-0.5, 1],
          expected: 1,
        },
      ],
    },
    {
      testName: 'Checking that <b> is rounded correctly',
      tests: [
        {
          inputs: [1, 0.5],
          expected: 2,
        },
        {
          inputs: [1, 0.4],
          expected: 1,
        },
        {
          inputs: [1, -0.6],
          expected: 0,
        },
        {
          inputs: [1, -0.5],
          expected: 1,
        },
      ],
    },
    {
      testName: 'Case: rounding both numbers correctly',
      tests: [
        {
          inputs: [1.2, 0.5],
          expected: 2,
        },
        {
          inputs: [3.5, 0.4],
          expected: 4,
        },
        {
          inputs: [3.1, 0.4],
          expected: 3,
        },
        {
          inputs: [10.6, 5.7],
          expected: 17,
        },
      ],
    },
    {
      testName: 'Case: both numbers are -ve',
      tests: [
        {
          inputs: [-1.7, -0.6],
          expected: -3,
        },
        {
          inputs: [-7.2, -3.5],
          expected: -10,
        },
      ],
    },
  ],
};

for (const [testFunc, testCases] of Object.entries(TESTS)) {
  const func = eval(testFunc);

  describe(testFunc, function () {
    for (const testCase of testCases) {
      describe(testCase.testName, function () {
        for (const test of testCase.tests) {
          const line = `(${test.inputs.join(', ')}) => ${test.expected}`;
          it(line, function () { // eslint-disable-line jest/expect-expect
            assert.equal(func(...test.inputs), test.expected);
          });
        }
      });
    }
  });
}
