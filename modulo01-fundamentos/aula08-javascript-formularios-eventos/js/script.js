window.addEventListener('load', start);

function start() {
  console.log('Aula 08 - Javascript - formulários e manipulação de eventos');
  console.log('Página totalmente carregada');

  // input name
  var name = document.querySelector('#name');
  name.addEventListener('keyup', countName);

  // form
  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}

function countName() {
  var count = event.target.value;
  var span = document.querySelector('#nameLength');
  span.textContent = count.length;
}

function preventSubmit() {
  event.preventDefault();
  var name = document.querySelector('#name');
  alert(name.value + ' cadastrado(a) com sucesso!');
}
