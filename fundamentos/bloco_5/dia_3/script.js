function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let value of weekDays) {
    const days = value;
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Adicionando os dias do mês no calendário;
function daysOfTheMonth() {
  const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');

  for (let value of dezDays) {
    const daysMonth = value;
    const dezDaysItem = document.createElement('li');
    dezDaysItem.innerHTML = daysMonth;
    dezDaysItem.setAttribute('class', 'day');
    
    daysList.appendChild(dezDaysItem);
  };
  // Adicionando as classes 'holiday' e 'friday' nos dias especificados;
  for (let value in dezDays) {
    if (value == 25 || value == 26 || value == 32) {
      document.getElementsByClassName('day')[value].classList.add('holiday');
    }
    if (value == 5 || value == 12 || value == 19 || value == 26) {
      document.getElementsByClassName('day')[value].classList.add('friday');
    }
  }
};

daysOfTheMonth();