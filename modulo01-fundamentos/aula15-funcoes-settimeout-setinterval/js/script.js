window.addEventListener('load', () => {
  console.log('start');

  const timer = document.querySelector('#timer');
  let count = 0;

  /* FUNÇÕES SETTIMEOUT E SETINTERVAL*/

  /* Contador que mostra números de um em um a cada segundo */
  /* Quando o número for múltiplo de 5, mostra "+0,5" após meio segundo */
  /* Criar o botão pra cancelar a execução */

  /* SETINTERVAL */
  /* Posterga e repete as execuções a cada "x" milissegundos */
  /* Para parar as execuções usa-se o "clearInterval" (importante) */
  /* Usado para instruções repetitivas */
  const interval = setInterval(() => {
    console.log('interval');
    timer.textContent = ++count;

    if (count === 10) {
      this.clearInterval(interval);
      return;
    }

    if (count % 5 === 0) {
      /* SETTIMEOUT */
      /* Posterga execuções (tempo em milissegundos) */
      /* Usado para instruções momentâneas */
      setTimeout(() => {
        timer.textContent = count + ',5';
      }, 500);
    }
  }, 1000);
});
