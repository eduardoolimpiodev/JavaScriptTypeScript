let num1 = 9.456123;

// Floor arredonda para baixo.
// let num2 = Math.floor(num1);

// Floor arredonda para cima.
 let num2 = Math.ceil(num1);
console.log(num2);

// Round arredonda para o mais próximo do número decimal.
let num3 = Math.round(num1);
console.log(num3);

// Pega o maior número de uma sequência de números.
console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7));

// Pega o menor número de uma sequência de números.
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7));

// gera números aleatórios entre 0 e 0.999999999999
console.log(Math.random());

//Pega o número aleatório entre 10 e 5.
const aleatorio = Math.random() * (10 - 5) + 5;
console.log(aleatorio);

//Pega o número aleatório entre 10 e 5 e arredonda..
const aleatorio2 = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio2);

// Potenciação
console.log(Math.pow(2, 3));

// Raiz quadrada
console.log(Math.sqrt(81));

// Raiz quadrada matemática, sem usar o método math.sqrt
let raizQuadrada = 9;
console.log(raizQuadrada ** (0.5));

// Infinity
console.log(100 / 0);
console.log((Number.isNaN(100/0)));

