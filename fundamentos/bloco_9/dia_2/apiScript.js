// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => document.getElementById('jokeContainer').innerText = data.joke);
};

window.onload = () => fetchJoke();

const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const array = [];
    for (let index = 1; index <= 10; index += 1) {
      array.push(Math.floor(Math.random() * 50) + 1);
    }
    const sum = array.map((number) => number * number)
    .reduce((sum, number) => sum + number);
    console.log(sum);
    (sum < 8000) ? resolve(sum) : reject();
  })
  promise
    .then((sum) => [2, 3, 5, 10].map((number) => console.log(sum / number)))
    .then((newArray) => newArray.reduce((number, acc) => number + acc, 0))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

fetchPromise();