//Verificar se o usuário pode tirar carteira de motorista

//Pessoas maiores de idade (>=18)

//Qual a sua idade?
//Voce e maior de idade, entao pode tirar a carteira.
//SENAOOOO voce nao pode tirar a carteira de motorista

//Pessoas maiores de idade(>=18)

var prompt = require ("prompt-sync")();

let idade = prompt ("Ola, digite sua idade:");

if(idade >=18){
    console.log("Voce podera tirar a carteira");
}else if(idade < 18){
    console.log("Voce nao podera tirar a carteira")
}else{
    console.log("Essa informacao nao e valida")
}