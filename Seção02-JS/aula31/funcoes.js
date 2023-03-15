//Funções, executam ações.

// function saudacao (nome) {
//     return `Bom dia ${nome}!`;
// };

// const variavel = saudacao('Eduardo');
// console.log(variavel);

function soma(a, b) {
    const resultado = a + b;
    return resultado;
};

console.log(soma(1, 2));
console.log(soma(10, 20));
console.log(soma(7, 7));



function soma2(a = 1, b = 2) {
    const resultado = a + b;
    return resultado;
};

console.log(soma2());


const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(81));
console.log(raiz(25));
console.log(raiz(9));


//Arrow function
const raiz3 = n =>  n ** 0.5;

console.log(raiz3(81));
console.log(raiz3(25));
console.log(raiz3(9));

