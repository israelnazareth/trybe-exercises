const assert = require('assert');

const greetPeople = (people) => {
  let greeting = '';
  let newArray = [];
  for (const person of people) {
    greeting = 'Hello ' + person;
    newArray.push(greeting);
  };
  return newArray;
};

assert.strictEqual(typeof greetPeople, 'function');
const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const output = greetPeople(parameter);
assert.deepStrictEqual(output, result);
