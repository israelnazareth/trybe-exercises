// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo(palavra){
  if (palavra === palavra.split('').reverse().join('')){
    return palavra + " é um palíndromo.";
  } else {
    return palavra + " não é um palíndromo.";
  }
}

console.log(palindromo("biscoito"));
