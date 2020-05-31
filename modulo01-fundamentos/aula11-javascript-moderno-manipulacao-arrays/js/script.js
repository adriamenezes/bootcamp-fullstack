window.addEventListener('load', () => {
  console.log('start');
  /* PRINCIPAIS MÉTODOS DE ARRAYS COM ES6+ */
  /* MAP */
  /* Gera um array transformando os dados (imutável) */
  /* Retorna um novo array */
  doMap();
  /* FILTER */
  /* Gera um array filtrando elementos com base em proposição (imutável) */
  /* Retorna um novo array */
  doFilter();
  /* FOREACH */
  /* Percorre todos os elementos do array, aplicando lógica (mutável) */
  /* Retorna o array com a lógica aplicada */
  doForEach();
  /* REDUCE */
  /* Realiza cálculo iterativo com base nos elementos */
  /* Retorna um número */
  doReduce();
  /* FIND */
  /* Encontra elementos com base em proposições */
  /* Retorna o objeto */
  doFind();
  /* SOME */
  /* Verifica se há pelo menos um elemento que atenda a proposição */
  /* Retorna true ou false */
  doSome();
  /* EVERY */
  /* Verifica se todos os elementos atendem à proposição */
  /* Retorna true ou false */
  doEvery();
  /* SORT */
  /* Ordena os elementos com base em um critério */
  doSort();
});

function doMap() {
  /* transformar o array people em objeto com nome e email */
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });
  console.log(nameEmailArray);
  return nameEmailArray;
}

function doFilter() {
  /* filtrar as pessoas maiores de 50 anos */
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });
  console.log(olderThan50);
}

function doForEach() {
  /* Incluir nova propriedade no objeto */
  const mappedPeople = doMap();
  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });
  console.log(mappedPeople);
}

function doReduce() {
  /* Somar as idades das pessoas */
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);
  console.log(totalAges);
}

function doFind() {
  /* Primeira pessoa de Minas Gerais */
  const found = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });
  console.log(found);
}

function doSome() {
  /* Pessoas do Amazonas */
  const found = people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });
  console.log(found);
}

function doEvery() {
  /* nat = 'BR' */
  const every = people.results.every((person) => {
    return person.nat === 'BR';
  });
  console.log(every);
}

function doSort() {
  /* Ordenar por nome (vetor) */
  const mappedNames1 = people.results
    .map((person) => {
      return person.name.first;
    })
    .filter((person) => {
      return person.startsWith('A');
    })
    .sort();
  console.log(mappedNames1);
  /* fim Ordenar por nome (vetor) */

  /* Ordenar por nome (objeto) */
  const mappedNames2 = people.results
    .map((person) => {
      return { name: person.name.first };
    })
    .filter((person) => {
      return person.name.startsWith('A');
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  console.log(mappedNames2);
  /* fim Ordenar por nome (objeto) */

  /* Ordenar por nome (objeto) ASC e DESC */
  const mappedNames3 = people.results
    .map((person) => {
      return { name: person.name.first };
    })
    .filter((person) => {
      return person.name.startsWith('A');
    })
    .sort((a, b) => {
      /* ASC */
      return a.name.length - b.name.length;
      /* DESC */
      //   return b.name.length - a.name.length;
    });
  console.log(mappedNames3);
  /* fim Ordenar por nome (objeto) ASC e DESC */
}
