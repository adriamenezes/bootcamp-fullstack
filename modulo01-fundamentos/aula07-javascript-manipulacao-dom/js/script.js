/* Manipulação DOM */

// Manipulando por elemento
var title = document.querySelector('h1');
title.textContent = 'Mudei';

// Manipulando por id
var city = document.querySelector('#city');
city.textContent = 'São Paulo, SP';

// Manipulando por classe
var dataArray = document.querySelectorAll('.data');
dataArray = Array.from(dataArray);

for (var i = 0; i < dataArray.length; i++) {
  var currentElement = dataArray[i];
  /* css in js */
  // currentElement.style.color = 'green';
  currentElement.classList.add('emphasis');
}
