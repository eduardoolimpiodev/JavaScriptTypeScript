//Variável com let & template string.
// Não podemos criar variáveis com palavras reservadas.
// Variáveis precisam ter nomes significativos.
// Não pode começar o nome de uma variável com um número.
// Não podemos conter espaços ou traços
// Não podemos redeclarar variáveis com let, uma vez criada não podemos recriar utilziando o let, devemos reatribir diretamente
// paraa variável.
//Exemplo: 
// let nome = 'Eduardo';
// nome = 'Novo Valor!';

// Utilizamos camelCase
/* Case-sensitive Exemplo: 
    Exemplo:
        let nomeCliente = 'Eduardo';
        let nomecliente = 'Olimpio';
        nomeCliente != nomecliente;

*/

let nome = 'João';
let anoNascimento = 1984;
let conheceuMaria = 2000;
let quantidadeFilho = 1;
let anoDoFilho = 2015;
let nomeDoFilho = 'Eduardo';

console.log(`${nome} nasceu em ${anoNascimento}.`);
console.log(nome, 'nasceu em 1984.');
console.log(`Em ${conheceuMaria} ${nome} conheceu Maria`);
console.log('Em', conheceuMaria, nome, 'conheceu Maria.');
console.log(`Maria teve ${quantidadeFilho} filho com ${nome} em ${anoDoFilho}.`);
console.log('Maria teve', quantidadeFilho, 'filho com', nome, 'em', anoDoFilho);
console.log(`O filho de ${nome} se chama ${nomeDoFilho}.`);
console.log('O filho de', nome, 'se chama', nomeDoFilho);

