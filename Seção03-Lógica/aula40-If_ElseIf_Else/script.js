let horario = 11;

if(horario >= 6 && horario < 12){
    console.log('Bom dia !!');
}
else if (horario >= 12 && horario < 18){
    console.log("Boa tarde!");
}
else{
    console.log("Boa Noite!");
}


const tenhoDinheiro = true;
if(tenhoDinheiro){
    console.log("Vou sair de casa.")
}
else {
    console.log("Não vou sair de casa.");
};


//OU
//No exemplo a baixo a condição deu verdadeiro pois a string não é vazia, ou seja é true.

const terDinheiro = 'Eu tenho dinheiro';
if(terDinheiro) {
    console.log('Vou sair de casa!');
};