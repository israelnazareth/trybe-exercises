const assert = require('assert');

function addOne() {
  const myExpectedArray = [];
  for(let value of myArray) {    
    myExpectedArray.push(value += 1);
  }
  console.log(myExpectedArray);
  return myExpectedArray;
} 

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
