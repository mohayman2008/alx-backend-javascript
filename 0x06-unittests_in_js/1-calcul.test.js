const assert = require('assert');
const calculateNumber = require('./1-calcul'); // eslint-disable-line no-unused-vars

const TESTS = {
  calculateNumber: [
    {
      testName: 'Case: <a> and <b> = 0',
      tests: [
        {
          inputs: ['SUM', 0, 0],
          expected: 0,
        },
        {
          inputs: ['SUBTRACT', 0, 0],
          expected: 0,
        },
        {
          inputs: ['DIVIDE', 0, 0],
          expected: 'Error',
        },
      ],
    },
    {
      testName: 'Checking that <a> is rounded correctly',
      tests: [
        {
          inputs: ['SUM', 0.5, 1],
          expected: 2,
        },
        {
          inputs: ['SUM', 0.4, 1],
          expected: 1,
        },
        {
          inputs: ['SUM', -0.6, 1],
          expected: 0,
        },
        {
          inputs: ['SUM', -0.5, 1],
          expected: 1,
        },
        {
          inputs: ['SUBTRACT', 0.5, 1],
          expected: 0,
        },
        {
          inputs: ['SUBTRACT', 0.4, 1],
          expected: -1,
        },
        {
          inputs: ['SUBTRACT', -0.6, 1],
          expected: -2,
        },
        {
          inputs: ['SUBTRACT', -0.5, 1],
          expected: -1,
        },
        {
          inputs: ['DIVIDE', 0.5, 1],
          expected: 1,
        },
        {
          inputs: ['DIVIDE', 0.4, 1],
          expected: 0,
        },
        {
          inputs: ['DIVIDE', -0.6, 1],
          expected: -1,
        },
        {
          inputs: ['DIVIDE', -0.5, 1],
          expected: 0,
        },
      ],
    },
    {
      testName: 'Checking that <b> is rounded correctly',
      tests: [
        {
          inputs: ['SUM', 1, 0.5],
          expected: 2,
        },
        {
          inputs: ['SUM', 1, 0.4],
          expected: 1,
        },
        {
          inputs: ['SUM', 1, -0.6],
          expected: 0,
        },
        {
          inputs: ['SUM', 1, -0.5],
          expected: 1,
        },
        {
          inputs: ['SUBTRACT', 1, 0.5],
          expected: 0,
        },
        {
          inputs: ['SUBTRACT', 1, 0.4],
          expected: 1,
        },
        {
          inputs: ['SUBTRACT', 1, -0.6],
          expected: 2,
        },
        {
          inputs: ['SUBTRACT', -1, 0.5],
          expected: -2,
        },
        {
          inputs: ['DIVIDE', 1, 0.5],
          expected: 1,
        },
        {
          inputs: ['DIVIDE', 1, 0.4],
          expected: 'Error',
        },
        {
          inputs: ['DIVIDE', 1, -0.6],
          expected: -1,
        },
        {
          inputs: ['DIVIDE', 1, -0.5],
          expected: 'Error',
        },
      ],
    },
    {
      testName: 'Case: rounding both numbers correctly',
      tests: [
        {
          inputs: ['SUM', 1.2, 0.5],
          expected: 2,
        },
        {
          inputs: ['SUM', 3.5, 0.4],
          expected: 4,
        },
        {
          inputs: ['SUM', 3.1, 0.4],
          expected: 3,
        },
        {
          inputs: ['SUM', 10.6, 5.7],
          expected: 17,
        },
        {
          inputs: ['SUBTRACT', 1.2, 0.5],
          expected: 0,
        },
        {
          inputs: ['SUBTRACT', 3.5, 0.4],
          expected: 4,
        },
        {
          inputs: ['SUBTRACT', 3.1, 0.4],
          expected: 3,
        },
        {
          inputs: ['SUBTRACT', 10.6, 5.7],
          expected: 5,
        },
        {
          inputs: ['DIVIDE', 1.2, 0.5],
          expected: 1,
        },
        {
          inputs: ['DIVIDE', 3.5, 0.4],
          expected: 'Error',
        },
        {
          inputs: ['DIVIDE', 3.1, 0.4],
          expected: 'Error',
        },
        {
          inputs: ['DIVIDE', 14.6, 5.7],
          expected: 2.5,
        },
      ],
    },
    {
      testName: 'Case: both numbers are -ve',
      tests: [
        {
          inputs: ['SUM', -1.7, -0.6],
          expected: -3,
        },
        {
          inputs: ['SUM', -7.2, -3.5],
          expected: -10,
        },
        {
          inputs: ['SUBTRACT', -1.7, -0.6],
          expected: -1,
        },
        {
          inputs: ['SUBTRACT', -7.2, -3.5],
          expected: -4,
        },
        {
          inputs: ['DIVIDE', -1.7, -0.6],
          expected: 2,
        },
        {
          inputs: ['DIVIDE', -7.2, -2.5],
          expected: 3.5,
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
