/* Estruturas de decisão */

// if/else
var a = 5;
var b = 4;

if (a === b) {
  console.log(a + ' é igual a ' + b);
} else if (a > b) {
  console.log(a + ' é maior que ' + b);
} else {
  console.log(a + ' é menor que ' + b);
}

// switch case
var dia = 1;
var resultado = '';
switch (dia) {
  case 1:
    resultado = 'Domingo';
    break;
  case 2:
    resultado = 'Segunda';
    break;
  case 3:
    resultado = 'Quarta';
    break;
  case 4:
    resultado = 'Quinta';
    break;
  case 5:
    resultado = 'Sexta';
    break;
  case 6:
    resultado = 'Sábado';
    break;
  default:
    r = 'Dia inválido';
}
console.log(resultado);

// Operador ternário
a = 6;
b = 7;
var resposta = a === 0 ? 'igual' : a > b ? 'maior' : 'menor';
console.log(resposta);

var diaSemana =
  dia == 1
    ? 'Domingo'
    : dia === 2
    ? 'Segunda'
    : dia === 3
    ? 'Terça'
    : dia === 4
    ? 'Quarta'
    : dia === 5
    ? 'Quinta'
    : dia === 6
    ? 'Sexta'
    : dia === 7
    ? 'Sábado'
    : 'Dia inválido';
console.log(diaSemana);

/* fim Estruturas de decisão */

/* Estruturas de repetição */

// while
numeroAtual = 1;
somatorio = 0;
while (numeroAtual <= 10) {
  somatorio += numeroAtual;
  numeroAtual++;
}
console.log('A soma é ' + somatorio);

// do while
numeroAtual = 1;
somatorio = 0;
do {
  somatorio += numeroAtual;
  numeroAtual++;
} while (numeroAtual <= 10);
console.log('A soma é ' + somatorio);

// for
somatorio = 0;
for (numeroAtual = 1; numeroAtual <= 10; numeroAtual++) {
  somatorio += numeroAtual;
}
console.log('A soma é ' + somatorio);

/* fim Estruturas de repetição */
