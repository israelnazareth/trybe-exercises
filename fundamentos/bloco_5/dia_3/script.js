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

// Exercício 01
// Adicionando os dias do mês no calendário;
function createDaysOfTheMonth() {
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

createDaysOfTheMonth();

// Exercício 02:
function createButtonHolidays(buttonName) {
  const divButton = document.querySelector('.buttons-container');
  const newButton = document.createElement('button');
  const newButtonID = 'btn-holiday';

  newButton.id = newButtonID ;
  newButton.innerHTML = buttonName;
  divButton.appendChild(newButton);
}

createButtonHolidays('Feriados');

// Exercício 03:  
function displayHolidays() {
  let holidays = document.querySelectorAll('.holiday');
  let button = document.querySelector('#btn-holiday');
  let color1 = 'rgb(238,238,238)';
  let color2 = 'red';

  button.addEventListener('click', function() {
    for (let value of holidays) {
      if (value.style.backgroundColor === color2) {
        value.style.backgroundColor = color1;
      } else {
        value.style.backgroundColor = color2;
      }
    }
  })
};

displayHolidays();

// Exercício 04:
function createButtonFridays(buttonName) {
  const divButton = document.querySelector('.buttons-container');
  const newButton = document.createElement('button');
  const newButtonID = 'btn-friday';

  newButton.id = newButtonID ;
  newButton.innerHTML = buttonName;
  divButton.appendChild(newButton);
}
createButtonFridays('Sexta-feira');

// Exercício 05:
function displayFridays(friday) {
  const getFridays = document.querySelectorAll('.friday');
  const getButton = document.querySelector('#btn-friday');

  getButton.addEventListener('click',
  
  function() {
    for (let value of getFridays) {
       if (value.innerText == friday) {         
         value.innerText = parseInt(value.nextElementSibling.innerText - 1);
       } else {
         value.innerText = friday;
       }
    }
  })
}
displayFridays('Sextou!!!')

// Exercício 06:
function daysMouseOver() {
  let days = document.querySelector('#days')

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
  })
};

function daysMouseOut() {
  let days = document.querySelector('#days')

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  })
};

daysMouseOver();
daysMouseOut();