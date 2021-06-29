// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let numbers = [2, 4, 6, 7, 10, 0, -3];

function verificaMenorIndice (){
  let menor = 0;
  for (let indice in numbers){
    if (numbers[menor] > numbers[indice]){
      menor = indice
    }    
  }
  return menor
}
console.log(verificaMenorIndice())