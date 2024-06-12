function calculateNumber(type, a, b) {
  /* eslint-disable */
  a = Math.round(a);
  b = Math.round(b);
  /* eslint-enable */

  switch (type) {
    case 'SUM':
      return a + b;
    case 'SUBTRACT':
      return a - b;
    case 'DIVIDE':
      if (b === 0) return 'Error';
      return a / b;
    default:
      throw new Error(`Unknown operation: ${type}`);
  }
}

module.exports = calculateNumber;
