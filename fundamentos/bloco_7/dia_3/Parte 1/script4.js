// 4. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número:
// - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado;
// - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado;
// - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado;
// - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado;
// - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado;

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
