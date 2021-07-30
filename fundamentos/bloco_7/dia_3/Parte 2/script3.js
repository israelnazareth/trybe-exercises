const assert = require('assert');

const sumAllNumbers = () => {
  let summedNumbers = 0;
  for (let value of numbers) {
    summedNumbers += value;
  }
  console.log(summedNumbers);
  return summedNumbers;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
