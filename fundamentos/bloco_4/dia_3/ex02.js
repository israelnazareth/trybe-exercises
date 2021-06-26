// 2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5
// *
// **
// ***
// ****
// *****

let n = 5;

for (let index = 4; index < n; index += 1){
  let linha = "";
  for (index2 = 1; index2 <= n; index2 += 1){
    linha += "*"
    console.log(linha)
  }
}