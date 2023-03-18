/*  
Operadores de comparação:
Comparam dois valores:
>   - Maior
>=  - Maior igual que
<   - Menor 
<=  - Menor igual que
==  - Igualdade - Checa valor
=== - Igualdade Estrita - Checa valor e tipo
!=  - Diferente - Checa valor
!== - Diferente Estrito - Checa valor e tipo


*/

const expressao = 10 > 5;
console.log(expressao);

const num1 = 10;
const num2 = 11;
const comp = num1 < num2;
console.log(comp);

const num3 = 10;
const num4 = '10';
console.log(num3 == num4);
console.log(num3 === num4);
