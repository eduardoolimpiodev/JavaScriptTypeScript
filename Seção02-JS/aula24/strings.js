// Barra invertida como caractere de escape.

let umaString = "Um \"texto\"";

let umaString2 = "Um \\texto";

// Retorno de elementos em determinada posição do índice de caracteres.
            //    012345678
let umaString3 = "Um texto";
console.log(umaString3[4]);
console.log(umaString3.charAt(4));
console.log(umaString3.concat(' ', 'em' , ' ', 'um', ' ', 'lindo', ' ', 'dia.'));
console.log(umaString3.concat(` em um lindo dia!`));
console.log(umaString3.concat(' em um lindo dia.'));

//Saber em qual índice começa a palavra texto.
console.log(umaString3.indexOf('texto'));

//Saber em qual índice começa a letra o de trás para frente.
console.log(umaString3.lastIndexOf('o'));

// EXPRESSÕES REGULARES

//Retorna todas as letras minúsculas em formato de array usando a flag /g
console.log(umaString3.match(/[a-z]/g));

//Retorna todas as letras minúsculas 
console.log(umaString3.match(/[a-z]/));

//Retorna o índice onde foi encontrado a primeira letra minúscula.
console.log(umaString3.search(/[a-z]/));

//Retorna o índice onde foi encontrado a letra x
console.log(umaString3.search(/x/));

// Substitui uma palavra por outra.
console.log(umaString3.replace(/Um/, 'Outro'));

let outraString = "O rato roeu a roupa do rei de roma!"
// Substitui letras por outras
console.log(outraString.replace(/r/, '#'));
//Utilizando a flag g, ele repete o replace a cima em todos so r's.
console.log(outraString.replace(/r/g, '#'));

//Tamanho da String ( tamanho em caracteres )
console.log(outraString.length);

//Fatiar uma string
console.log(outraString.slice(2, 6));

//Fatiar uma string de trás para frente, no caso são os últimos 3 caracteres.
console.log(outraString.slice(-3));

//Fatiar uma string de trás para frente, no caso são os últimos 3 caracteres começando pelo índice 1 e não pelo índice 0.
console.log(outraString.slice(-3, -1));

//Pega os últimos 5 índices.
console.log(outraString.substring(outraString.length -5));

// Divide uma string
console.log(outraString.split(' '));

// Divide uma string limitando a quantidade de vezes.
console.log(outraString.split(' ', 2));

//Passar string para maiúscula ou minúscula.
console.log(outraString.toUpperCase());
console.log(outraString.toLocaleLowerCase());

console.log(umaString);
console.log(umaString2);