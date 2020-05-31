window.addEventListener('load', () => {
  console.log('start');

  console.log('Hi');
  /* Exemplo de Assicronismo */
  /* Vai executar esse console log depois de 5 segundos */
  setTimeout(function cb1() {
    console.log('cb1');
  }, 5000);
  console.log('Bye');
});
