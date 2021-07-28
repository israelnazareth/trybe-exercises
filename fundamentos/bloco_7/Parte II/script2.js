// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

const palavraMaisLonga = frase => {
  let arrayDePalavras = frase.split(' ');
  let tamanhoMaximo = 0;
  let resultado = '';

  for (let palavra of arrayDePalavras) {
    if (palavra.length > tamanhoMaximo) {
      tamanhoMaximo = palavra.length;
      resultado = palavra;
    }
  } return resultado;
}

console.log(palavraMaisLonga("O deputado federal cometeu um crime inconstitucional")); // retorna 'inconstitucional'
