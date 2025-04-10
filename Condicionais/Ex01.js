//a. Verificar se um número é positivo, negativo ou zero.

var prompt = require ("prompt-sync")();

let numero = Number (prompt ("Ola, digite um numero"));

if(numero >=7){
    console.log("O numero e positivo");
}else if(numero < 1){
    console.log("O numero e negativo");
}else if(numero = 0){
    console.log("O numero e zero");
}else{
    console.log("Resposta invalida");
}