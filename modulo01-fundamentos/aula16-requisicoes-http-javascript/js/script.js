window.addEventListener('load', function () {
  /* FETCH */
  /* Usado para requisições HTTP, usa internamente Promises */
  doFetch();

  /* PROMISE */
  /* Javascript assíncrono, parcialmente resolve o callback hell */
  executeDivisionPromise();

  /* ASYNC AWAIT */
  /* Açúcar sintático das Promises, melhora a legibilidade */
  executeDivisionAsyncAwait();
  doFetchAsyncAwait();
});

function doFetch() {
  fetch('https://api.github.com/users/adriamenezes').then((res) => {
    res
      .json()
      .then((data) => {
        showData(data);
      })
      .catch((error) => {
        console.log('Erro na requisição.');
      });
  });
}

async function doFetchAsyncAwait() {
  const res = await fetch('https://api.github.com/users/adriamenezes');
  const json = await res.json();
  console.log(json);
}

function showData(data) {
  const user = document.querySelector('#user');
  user.textContent = data.login + ' ' + data.name;
}

function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Não é possível dividir por 0.');
    }
    resolve(a / b);
  });
}

function executeDivisionPromise() {
  divisionPromise(12, 3)
    .then((res) => {
      console.log(res);
    })
    .catch((errorMessage) => {
      console.log('Erro na divisão: ' + errorMessage);
    });
}

async function executeDivisionAsyncAwait() {
  const division = await divisionPromise(12, 2);
  console.log(division);
}
