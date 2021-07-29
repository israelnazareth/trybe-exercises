// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addingTurn = (object, key, value) => {
  object[key] = value;
}

addingTurn(lesson2, 'turno', 'manhã');

const listKeysOfObject = (object) => {
  console.table(Object.keys(object));
}

listKeysOfObject(lesson1);