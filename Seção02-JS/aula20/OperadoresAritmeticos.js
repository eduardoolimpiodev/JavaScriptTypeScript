/* OPERADORES ARITIMÉTICOS, DE INCREMENTO E ATRIBUIÇÃO


ARITIMÉTICOS :
+ Adição / Concatenação
- Subtração
* Multiplicação
/ Divisão
** Potenciação
% Resto da divisão

// ORDEM DE PRECEDÊNCIA (), **, *, /, %, +, -

*/

//Adição
const num1 = 5;
const num2 = 10;
console.log(num1 + num2);

//Concatenação:
const num3 = '5';
const num4 = '10'
console.log(num3 + num4);


console.log(num1 ** num2);

console.log(num1 % num2);

let contador = 1;
contador++;
contador++;
console.log(contador);

// Decremento

let contadorMenos = 10;
contadorMenos--;
contadorMenos--;
contadorMenos--;
console.log(contadorMenos);

const passo = 2;
let contadors = 0;

contadors = contadors + passo;
console.log(contadors);
contadors = contadors + passo;
console.log(contadors);
contadors = contadors + passo;
console.log(contadors);
contadors = contadors + passo;
console.log(contadors);

//Operação de atribuição

let contador2 = 0
contador2 += 2;
contador2 += 2;
contador2 += 2;
console.log(contador2);

let contadorPotencia = 2;
contadorPotencia **= 10;
console.log(contadorPotencia);

// NaN - Not a Number
// ParseFloat(decimais), ParseInt(inteiros)
const numm1 = 10;
const numm2 = 'Eduardo';
console.log(numm1 * numm2);
console.log(typeof(numm1), typeof(numm2));

const nummm1 = 10;
const nummm2 = parseInt('5');
console.log(nummm1 + nummm2);
console.log(typeof(nummm1), typeof(nummm2));

const nummmm1 = 10;
const nummmm2 = parseFloat('10.2');
console.log(nummmm1 + nummmm2);
console.log(typeof(nummmm1), typeof(nummmm2));

const nummmmm1 = 10;
const nummmmm2 = Number('10.2');
console.log(nummmmm1 + nummmmm2);
console.log(typeof(nummmmm1), typeof(nummmmm2));
