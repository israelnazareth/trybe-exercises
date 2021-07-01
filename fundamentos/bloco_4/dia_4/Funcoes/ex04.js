// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggerName(){
  for (let index of arrayTeste){
    let maiorNome = "";
    if (index.length > maiorNome){
      maiorNome = index;
      return maiorNome;
    }
  }
} 
console.log(biggerName());