// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// baby steps:
// 1. Adicionar a array;
// 2. Criar uma variável que armazenará a soma;
// 2. Criar uma estrutura de repetição 'for' para somar os valores da array, percorrendo-a;
// 3. Inserir a variável criada anteriormente de soma na estrutura de repetição;
// 4. Imprimir os valores da variável com o 'console.log'.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0

for (let index = 0; index < numbers.length; index += 1){
  soma += numbers[index];
}

console.log(soma)
