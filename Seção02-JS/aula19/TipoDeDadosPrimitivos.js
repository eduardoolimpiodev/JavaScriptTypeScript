// Tipos de dados primitivos : 
// String, Number, Undefined, Null, Boolean.

const nome = 'Eduardo';    //string
const nome2 = "Eduardo";   //string
const nome3 = `Eduardo`;   //string
const num1 = 10;           //number
const num2 = 10.52;        //number
let nomeAluno;             //Undefined = não aponta para local nenhum na memória.
let sobreNomeAluno = null; //Null =  Nulo, não aponta para local nenhum na memória.
const booleano = true;     //Boolean Verdadeiro ou falso; True or false. (valor lógico)

let a = 2;
let b = a;
console.log(a , b); //2, 2

a = 3;
console.log(a, b); // 3, 2



console.log(nome);
console.log(nome2);
console.log(typeof nome3, nome3); //tipo e valor