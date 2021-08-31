const { expect } = require('@jest/globals');
const sum = require('../src/exercicio1');

test('Testa se sum é uma função', () => { // Adicional
  expect(typeof sum).toBe('function');
});

test('Testa se 4 + 5 = 9', () => {
  expect(sum(4, 5)).toEqual(9);
});

test('Testa se 0 + 0 = 0', () => {
  expect(sum(0, 0)).toEqual(0);
})

test('Testa se retorna um erro', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow();
});

test('Testa se retorna uma mensagem de erro "parameters must be numbers"', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow(/parameters must be numbers/);
});
