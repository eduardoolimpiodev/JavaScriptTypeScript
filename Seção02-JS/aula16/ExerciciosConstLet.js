//Exercícios de Const e Let

/* 

Eduardo Olimpio tem 36 anos, pesa 86kg
tem 1.70 de altura e seu IMC é de 30.000
Eduardo nasceu em 1986

*/

const nome = 'Eduardo';
const sobrenome = 'Olimpio';
const peso = 86;
const idade = 36;
const alturaEmM = 1.70;
let imc;
imc = peso / (alturaEmM^2);
let anoNascimento;
anoNascimento = 2022 - idade;


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmM} de altura
e o seu IMC é de ${imc.toFixed(2)}`, `${nome} nasceu em`, anoNascimento);

console.log(nome, sobrenome, 'tem', idade, 'anos', 'pesa', peso, 'kg');
console.log('tem', alturaEmM, 'de altura e seu IMC é de', imc.toFixed(2));
console.log(nome, 'nasceu em', anoNascimento);