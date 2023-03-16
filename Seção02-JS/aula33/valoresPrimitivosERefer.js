/*  

Tipos de dados primitivos: [valores imutáveis] - Não podemos modifica-los, são valores copiados.
String. Number, Boolean, Undefined, Null (bigint, symbol).

Tipos de valor que são passados por referência [Valores mutáveis] - São valores passados por referência.
Podemos modifica-los
Array, Object, function.
*/


const a = {
    nome: 'Eduardo',
    'sobrenome': 'Olimpio'
};

const b = {...a};

a.nome = 'Maria'
console.log(a);
console.log(b);

// let a = [1, 2, 3];
// let b = [...a];
// let c = b;

// console.log(a, b);
// a.push(4);
// console.log(a, b)

// b.pop();
// console.log(a, b);
// console.log(a, b, c);

// a.push('Luiz');
// console.log(c);

// console.log(b)
// console.log(a);

