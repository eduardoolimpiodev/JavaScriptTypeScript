/*
&& -> TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA QUE RETORNE VERDADEIRA.
|| -> TODAS AS EXPRESSÕES PRECISAM SER FALSAS PARA QUE RETORNE FALSO.

&& -> FALSE && TRUE -> FALSE
|| -> TRUE && FALSE -> VAI RETORNAR O VALOR VERDADEIRO.



*/
console.log('Eduardo Olimpio' && 0 && 'Maria');
// RETORNOU O VALOR FALSO, NO CASO "0" ( ZERO ).

console.log('Eduardo Olimpio' && true && 'Maria');
// RETORNOU O ÚLTIMO VALOR VERDADEIRO.

//VALORES QUE SÃO AVALIZADOS COMO VALORES FALSOS:
//VALORES FALSYS -> SÃO AVALIADOS EM FALSOS QUANDO NECESSÁRIO.
// FALSE, 0, '', "", ``, NULL, UNDEFINED, NaN.
console.log('Eduardo' && NaN && 'Maria');

function falaOi() {
    return vaiExecutar ? 'Oi' : 'Tchau';
};

const vaiExecutar = false;

console.log(falaOi());

console.log(0 || false || null || "Eduardo Olimpio" || true);
// RETORNOU EDUARDO OLIMPIO POIS O OR PRECISA DE APENAS UMA EXPRESSÃO VERDADEIRA PARA RETORNAR UM RESULTADO VERDADEIRO.
// PARA O JAVASCRIPT EDUARDO OLIMPIO É UMA STRING VERDADEIRA.

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(corPadrao);



const a = 0;
const b = null;
const c = false;
const d = 'False';  // É UMA STRING QUE CONTÉM UM VALOR, OU SEJA É UM VALOR VERDADEIRO.
const e = NaN;

console.log(a || b || c || d || e);

