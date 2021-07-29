// 1. A função sum(a, b) retorna a soma do parâmetro a com o b:
// - Teste se o retorno de sum(4, 5) é 9;
// - Teste se o retorno de sum(0, 0) é 0;
// - Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5);
// - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5");

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
