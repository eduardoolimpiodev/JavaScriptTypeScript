/* ARRAYS */

//Criando array
const alunos = ['Roberto', 'Maria', 'Eduardo'];
console.log(alunos);

// Acessar pelo índice do array.
console.log(alunos[0]);


//Adicionar um objeto ao final do array
console.log(alunos.length);
alunos.push('Marcele');
alunos.push('Paula');
console.log(alunos);

//Adicionar um objeto no início do array.
alunos.unshift('Roberta');
console.log(alunos);

//Remove elemento do final do array.
const removido = alunos.pop();
console.log(removido);
console.log(alunos);

//Remove elemento do começo do array.
const removidoInicio = alunos.shift();
console.log(removidoInicio);
console.log(alunos);

//Fatiar o array
console.log(alunos.slice(0, 3));

//Fatiar pelo tamanho do array menos 1.
console.log(alunos.slice(0, -1));

//Array é um objeto
console.log(typeof alunos);

//Saber se está trabalhando com Array
console.log(alunos instanceof Array);

