//Objetos - Básico

const pessoa1 = {
    nome: 'Eduardo',
    sobrenome: 'Olimpio',
    idade: 36
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);


function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa2 = criaPessoa('Eduardo', 'Olimpio', 36);
console.log(pessoa2);
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);

const pessoa3 = criaPessoa('Eduardo', 'Olimpio', 36);
const pessoa4 = criaPessoa('Maria', 'Ramos', 120);
const pessoa5 = criaPessoa('Roberto', 'Junqueira', 72);
const pessoa6 = criaPessoa('Marcele', 'Meireles', 28);

console.log(pessoa3.nome, pessoa4.nome, pessoa5.nome, pessoa6.nome);


const pessoaFala = {
    nome: 'Eduardo',
    sobrenome: 'Olimpio',
    idade: 36,

    fala() {
        // console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoaFala.fala();
pessoaFala.incrementaIdade();
pessoaFala.fala();
pessoaFala.incrementaIdade();
pessoaFala.fala();
npessoaFala.incrementaIdade();
pessoaFala.fala();

