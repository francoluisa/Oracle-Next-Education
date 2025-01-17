olamundo();
olanome('Luísa');
dobro(5);
media(5,2,7);
maior(8,1);
potencia(7);

function olamundo (){
    console.log('Olá mundo');
}

function olanome(nome) {
    console.log(`Olá ${nome}`);
}

function dobro(numero) {
    console.log(numero * 2);
}

function media (numero1, numero2, numero3){
    console.log((numero1 + numero2 + numero3) / 3);
}

function maior (numero1, numero2){
    let maiorN = (numero1 > numero2 ? numero1 : numero2);
    console.log(maiorN);
}

function potencia(numero){
    console.log(numero * numero);
}