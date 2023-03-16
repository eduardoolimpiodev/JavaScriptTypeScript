/* 

Tipo de dados Primitivos (imutaveis) - String, Number, Boolean, Undefined, Null(bigint e symbol) - Valores copiados.


*/

let a = 'A';
let b = a;
console.log(a, b);

a = 'outraCoisa';
console.log(a, b);

//Referência são mutáveis - Arrays, objetos e funções - Passados por referência

let x = [1, 2, 3];
let y = [...x];
let z = y;
console.log(x, y);

x.push(4)
console.log(x, y);

y.pop();
console.log(x, y);

x.push('Luiz');
console.log(z);

console.log(x, y, z);



