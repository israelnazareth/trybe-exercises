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

function daysOfTheMonth() {
  const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');

  for (let value of dezDays) {
    const daysMonth = value;
    const dezDaysItem = document.createElement('li');
    dezDaysItem.innerHTML = daysMonth;
    dezDaysItem.setAttribute('class', 'day')
    
    daysList.appendChild(dezDaysItem);
  };  
  document.getElementsByClassName('day')[25].classList.add('holiday')
  document.getElementsByClassName('day')[26].classList.add('holiday')
  document.getElementsByClassName('day')[32].classList.add('holiday')

  document.getElementsByClassName('day')[5].classList.add('friday')
  document.getElementsByClassName('day')[12].classList.add('friday')
  document.getElementsByClassName('day')[19].classList.add('friday')
  document.getElementsByClassName('day')[26].classList.add('friday')
};

daysOfTheMonth();