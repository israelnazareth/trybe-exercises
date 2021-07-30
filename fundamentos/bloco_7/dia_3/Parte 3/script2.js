const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let contador = 0;

  for (let value of characters) {
    if (
      value === 'a' ||
      value === 'o' ||
      value === 'i' ||
      value === 'e' ||
      value === 'u'
    ) {
      contador += 1;
      results.push(contador);
    } else {
      results.push(value);
    }
  }
  return results.join('');
};

assert.strictEqual(typeof removeVowels, 'function');
const parameter = 'Dayane';
const result = 'D1y2n3';
const output = removeVowels(parameter);
assert.strictEqual(output, result);
