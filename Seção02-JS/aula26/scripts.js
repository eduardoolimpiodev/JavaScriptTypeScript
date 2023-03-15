// Numeros em JS - PADRÃO IEEE - 754-2008

let num1 = 10.578955126874;  
let num2 = 2.5;  
let num3 = 10;
let num4 = 0.7;
let num5 = 0.1;

// console.log(num1.toString() + num2);
//num1 = num1.toString();
// console.log(typeof(num1));

// CONEVRTER EM BINÁRIO
console.log(num1.toString(2));

// DUAS CASAS DECIMAIS
console.log(num1.toFixed(2));

//SABER SE O NÚMERO É INTEIRO, RETORNA TRUE OU FALSE
console.log(Number.isInteger(num1));

//SABER SE A CONTA É INVÁLIDA, RETORNARÁ UM NOT A NUMBER.
let temp = num1 * 'Ola';
console.log(temp);
console.log(Number.isNaN(temp));


let temp2 = num1 + '5';
console.log(temp2);
console.log(Number.isNaN(temp2));


//IMPRECISÃO DE NÚMEROS NO JAVA SCRIPT
console.log(num4 + num5);

num4 += num5; // = num4 = num4 + num5
num4 += num5;
num4 += num5;

console.log(num4);

// CONVERTER PARA INTEIRO.
num4 = Number(num4.toFixed(2));
console.log(num4);
console.log(Number.isInteger(num4));
