const greaterThanTen = (array) => {
  let results = [];
  for (let value of array) {
    if (value > 10) {
      results.push(value);
    }
  }
  return results;
};

const assert = require('assert');

assert.strictEqual(typeof greaterThanTen, 'function');

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
const output = greaterThanTen(parameter);

assert.deepStrictEqual(output, result);
