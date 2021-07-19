let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
let selecionar = document.querySelector('#estado');
const button = document.querySelector('#submit');

function selectState() {
  for (let cadaEstado of estados) {
    let criarOpcao = document.createElement('option');
    criarOpcao.innerHTML = cadaEstado;
    selecionar.appendChild(criarOpcao);
  }
} selectState();

// function inputDate() {
//   let data = document.querySelector('#data');
//   let day = '';
//   let month = '';
//   let year = '';
//   if (day <= 0 || day > 31) {
//     alert("Dia inválido");
//   } else if (month <= 0 || month > 12) {
//     alert("Mês inválido");
//   } else if (year <= 0) {
//     alert("Ano inválido")
//   }
// } inputDate();