const assert = require('assert');
const { serialize } = require('v8');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(typeof sum, 'function'); // Verifica se o tipo de 'sum' é uma 'function';
assert.strictEqual(sum(4, 5), 9); // Verifica se a soma está correta;
assert.strictEqual(sum(0, 0), 0); // Verifica se a soma de 0 + 0 é == 0;
assert.throws(() => {sum(4, '5');}); // Lança um erro quando um parâmetro é !== de 'number';
assert.throws(() => {sum(4, '5');}, /^Error: parameters must be numbers$/); // Especifica a mensagem de erro.
