const Utils = {
  calculateNumber(type, a, b) {
    /* eslint-disable */
    a = Math.round(a);
    b = Math.round(b);
    /* eslint-enable */

    if (type === 'SUM') return a + b;
    if (type === 'SUBTRACT') return a - b;
    if (type === 'DIVIDE') {
        if (b === 0) return 'Error';
        return a / b;
    }

    return 0;
  }
}

module.exports = Utils;
