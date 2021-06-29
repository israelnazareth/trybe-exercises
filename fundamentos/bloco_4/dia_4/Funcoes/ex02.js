// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Declarar a array;
// Criar uma function para verificar o índice do maior número;
// Percorrer o array;
// Comparar os valores da array;
// Armazenar o índice do maior valor;
// Retornar essa variável;
// E imprimir a variável.

let numbers = [2, 6, 3, 7, 10, 1];

function verificaMaiorIndice(){
  let maior = 0;
  for (let indice in numbers){
    if (numbers[maior] < numbers[indice]){
      maior = indice
    }    
  }
  return maior
}
console.log(verificaMaiorIndice());