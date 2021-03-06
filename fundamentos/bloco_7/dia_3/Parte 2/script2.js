const assert = require('assert');

const wordLengths = () => {
  const lengthOfWord = [];
  for (let value of words) {    
    lengthOfWord.push(value.length);
  } 
  console.log(lengthOfWord);
  return lengthOfWord;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
