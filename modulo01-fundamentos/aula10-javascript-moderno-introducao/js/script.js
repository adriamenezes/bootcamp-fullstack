'use strict'; // O Javascript acusa mais erros
console.log('Hello, Javascript moderno!');

/* VAR, LET E CONST */
/* var (escopo abrangente) x let (escopo reduzido) */
/* var */
function withVar() {
  /* i tem escopo global */
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  /* reatribuição de i */
  i = 20;
  console.log(i);
}
withVar();

/* let */
function withLet() {
  /* i só pertence a esse escopo */
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  /* Uncaught ReferenceError: i is not defined */
  //   i = 20;
  //   console.log(i);
}
/* é uma boa prática usar (let) ao invés de (var) */
withLet();

/* const (não podemos reatribuir valores) */
/* é uma boa prática usar o const */
/* const */
const c = 10;
/* Uncaught TypeError: Assignment to constant variable. */
// c = 20;

/* No entanto, o const não garante a imutabilidade total */
/* tipos não primitivos (array e objetos) */
const d = [];
/* Uncaught TypeError: Assignment to constant variable. */
// d = 1;
console.log(d);

d.push(2);
console.log(d);
/* fim VAR, LET E CONST */

/* FUNCTIONS E ARROW FUNCTIONS */
/* function */
function sum(a, b) {
  return a + b;
}
/* função anônima */
const sum2 = function (a, b) {
  return a + b;
};
/* arrow function */
const sum3 = (a, b) => {
  return a + b;
};
/* arrow function reduzida */
/* se tiver apenas um comando pode ser feito assim */
const sum4 = (a, b) => a + b;

/* chamadas */
console.log(sum(2, 3));
console.log(sum2(2, 3));
console.log(sum3(2, 3));
console.log(sum4(2, 3));
/* fim FUNCTIONS E ARROW FUNCTIONS */

/* TEMPLATE LITERALS */
const name = 'Adria';
const surName = 'Oliveira';

/* concatenação normal */
const text1 = 'Meu nome é ' + name + ' ' + surName;
/* template literals (boa prática) */
const text2 = `Meu nome é ${name} ${surName}`;

console.log(text1);
console.log(text2);
/* fim TEMPLATE LITERALS */

/* DEFAULT PARAMETERS */
const sum5 = (a, b = 10) => a + b;

console.log(sum5(2));
console.log(sum5(2, 8));
/* fim DEFAULT PARAMETERS */
