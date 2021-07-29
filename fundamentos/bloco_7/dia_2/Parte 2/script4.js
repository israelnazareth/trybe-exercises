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

const addingTurn = (object, key, value) => object[key] = value;

addingTurn(lesson2, 'turno', 'manhã');

const listKeysOfObject = object => Object.keys(object);

console.table(listKeysOfObject(lesson1));

const lengthOfObject = object => Object.keys(object).length;

console.log(lengthOfObject(lesson1));

const listValuesOfObject = object => Object.values(object);

console.log(listValuesOfObject(lesson1));
