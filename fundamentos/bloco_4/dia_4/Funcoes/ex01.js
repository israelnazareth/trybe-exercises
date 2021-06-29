// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let palavra = "ovo";

function palindromo(){
  if (palavra === palavra.split('').reverse().join('')){
    return true;
  } else {
    return false;
  }
}
console.log(palindromo())
