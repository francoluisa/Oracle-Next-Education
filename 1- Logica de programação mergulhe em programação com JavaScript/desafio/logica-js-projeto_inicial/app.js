/* *******************************************desafios aula 03 *******************************************

let contador = 1;
while (contador <=10){
    alert(`Contador: ${contador}`);
    contador++;
}

let contador = 10;

while (contador >= 0) {
    alert(`Contador ${contador}`);
    contador--;
}


let numero = prompt("Digite um numero"); 

while (numero >= 0) {
    console.log(`Número ${numero}`);
    numero--;
}

let numero = prompt("Digite um numero"); 
let contador = 0;
while (contador <= numero) {
    console.log(`Número ${contador}`);
    contador++;
} */


/* *******************************************desafios aula 04 *******************************************

console.log("Boas vindas!");

let nome = "Luísa";
console.log(`Olá, ${nome}!`);

let nome = "Luísa";
alert(`Olá, ${nome}`);

let pergunta = prompt("ual a linguagem de programação que você mais gosta?");

console.log(pergunta);

let valor1 = 6;
let valor2 = 3;

let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

let valor1 = 6;
let valor2 = 3;

let resultado = valor1 - valor2;

console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultado}`);

let idade = prompt("Qual a sua idade?");

if (idade >= 18){
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade");
}

let check = idade >= 18 ? "maior de idade" : "menor de idade!";
console.log(`Você é ${check}`);

let numero = prompt("Digite um número");

if (numero > 0){
    console.log("Seu número é positivo");
}else if (numero < 0 ){
    console.log("Seu número é negativo");
} else{
    console.log("Seu numero é zero");
}

let numero = 1;

while (numero <= 10){
    console.log(numero);
    numero++;
} 

let nota = 9;

console.log(nota >= 7 ? "Aprovado": "Reprovado");

console.log(Math.random());
console.log(Math.random() * 10) + 1;
console.log(Math.random() * 100) + 1;
*/
