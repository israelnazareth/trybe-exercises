const assert = require('assert');
const { mkdirSync } = require('fs');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.strictEqual(typeof myFizzBuzz, 'function'); // Verifica se 'myFizzBuzz' é uma função.
assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz'); // Verifica se o parâmetro passado é um número divisível por 3 e 5;
assert.deepStrictEqual(myFizzBuzz(3), 'fizz'); // Verifica se o parâmetro passado é um número divisível por 3;
assert.deepStrictEqual(myFizzBuzz(5), 'buzz'); // Verifica se o parâmetro passado é um número divisível por 5;
assert.deepStrictEqual(myFizzBuzz(11), 11); // Verifica se o parâmetro passado NÃO é um número divisível por 3 nem por 5;
assert.deepStrictEqual(myFizzBuzz('word'), false); // Verifica se o parâmetro passado é do tipo 'number'.
