let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
let selecionar = document.querySelector('#estado');

function selectState() {
  for (let cadaEstado of estados) {
    let criarOpcao = document.createElement('option');
    criarOpcao.innerHTML = cadaEstado;
    selecionar.appendChild(criarOpcao);
  }
} selectState();
