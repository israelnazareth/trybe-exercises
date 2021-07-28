// 1. Crie uma função que receba um número e retorne seu fatorial.

// Método normal:
const fatorial = (n) => {
  if (n === 0) {
    return 1
  } return (n * fatorial(n-1));
}
console.log(`Fatorial recursivo: ${fatorial(3)}`)

// Método com ternary operator:
const fatorialTernaryOperator = (n) => {
  return (n === 0 || n === 1) ? 1: (n * fatorialTernaryOperator(n-1));
} 
console.log(`Fatorial com operador ternário: ${fatorialTernaryOperator(3)}`);
