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

const listKeysOfObject = (object) => Object.keys(object);

console.table(listKeysOfObject(lesson1));
