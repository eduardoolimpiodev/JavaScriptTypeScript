/* 
imc = peso * altura / altura
1º Capturar evento de submit do formulário
*/

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e){
    e.preventDefault;
    console.log('enviado')
});
