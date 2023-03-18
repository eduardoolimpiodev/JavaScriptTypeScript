/*
Operadores Lógicos:
&& -> AND -> E -> TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE.
|| -> OR  -> OU -> SE HOIUVER APENAS UMA EXPRESSÃO VERDADEIRA, IRÁ RETORNAR TRUE.
!  -> NOT -> NÃO 
*/
const expressaoAndTrue = true && true && true;
const expressaoAndFalse = true && false && true;
console.log(expressaoAndTrue);
console.log(expressaoAndFalse);

const expressaoOR = true || false;
console.log(expressaoOR);

const expressaoORFalse = false || false;
console.log(expressaoORFalse);

const usuario = 'Eduardo';
const senhaUsuario = '123456';

const vaiLogar = usuario === 'Eduardo' && senhaUsuario === '123456';
console.log(vaiLogar);

const vaiLogarOr = usuario === 'Eu' || senhaUsuario === '654321';
console.log(vaiLogarOr);

//NOT -> NEGAÇÃO
console.log(!true);
console.log(!false);