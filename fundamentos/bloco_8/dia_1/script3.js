const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const contadorDeRespostas = (gabarito, estudante, checador) => {
  let contador = 0;
  for (let index = 0; index <= gabarito.length; index += 1) {
    const funcCechador = checador(gabarito[index], estudante[index]);
    contador += funcCechador;
  }
  return `A nota final é ${contador}.`;
}

const checker = (param1, param2) => {
  if (param1 === param2) {
    return 1;
  } if (param1 === 'N.A') {
    return 0;
  }
  return -0.5
}

console.log(contadorDeRespostas(RIGHT_ANSWERS, STUDENT_ANSWERS, checker));
