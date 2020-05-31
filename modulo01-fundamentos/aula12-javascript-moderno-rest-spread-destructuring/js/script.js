window.addEventListener('load', () => {
  console.log('start');
  /* SPREAD */
  /* Espalha elemento de vetores */
  doSpread();
  /* REST */
  /* Agrupa elementos em funções */
  doRest();
  /* DESTRUCTURING */
  /* Permite uma melhor escrita e legibilidade */
  /* Compatível com arrays e objetos */
  doDestructuring();
});

function doSpread() {
  /* Concatenar dois arrays [Mr + Ms]  */
  const marriedMen = people.results.filter(
    (person) => person.name.title === 'Mr'
  );
  const marriedWomen = people.results.filter(
    (person) => person.name.title === 'Ms'
  );
  const marriedPeople = [...marriedMen, ...marriedWomen];

  console.log(marriedMen);
  console.log(marriedWomen);
  console.log(marriedPeople);
}

function doRest() {
  /* Criar a função de soma infinita */
  console.log(infiniteSum(1, 2, 3));
}

function infiniteSum(...numbers) {
  return numbers.reduce((accumulator, current) => accumulator + current);
}

function doDestructuring() {
  /* Criar variáveis a partir do objeto */
  const first = people.results[0];

  /* Construção repetitiva */
  // const username = first.login.username;
  // const password = first.login.password;

  /* Usando Destructuring */
  const { username, password } = first.login;
  console.log(username);
  console.log(password);
}
