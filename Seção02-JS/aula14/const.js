//Variável com const.
// Não podemos criar constantes com palavras reservadas.
// Constantes precisam ter nomes significativos.
// Não pode começar o nome de uma constante com um número.
// Não podemos conter espaços ou traços
// Não utilize var, utilize const.
// Não podemos reatribuir valores para constante.


const primeiroNumero = 5;
const segundoNumero = 10;

const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 30;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(primeiroNumero);
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof(primeiroNumero));
console.log(typeof primeiroNumero);