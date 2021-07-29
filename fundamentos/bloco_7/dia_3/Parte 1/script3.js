// 3. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array:
// - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado;
// - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];
// - Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações;
// - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado;

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
};

assert.strictEqual(typeof myRemoveWithoutCopy, 'function'); // Verifica se 'myRemoveWithoutCopy' é uma função.

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]); // Verifica se myRemoveWithoutCopy retorna o array esperado.

assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]); // Verifica se myRemoveWithoutCopy NÃO retorna o 'expected'.

// Verifica se o array passado por parâmetro na função myRemoveWithoutCopy não sofreu alterações.
const randomArray = [10, 20, 30, 40, 50];
myRemoveWithoutCopy(randomArray, 10);
assert.strictEqual(randomArray.length, 4);

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]); // Verifica se essa chamada retorna o valor esperado.
