/* 1 */
function imcCalculo (alturaM, pesoKg){
    let imc = pesoKg / (alturaM ** 2);
    return imc;
}

/* 2 */
function fatorial (numero){
    for (let fatorial = numero - 1; fatorial >= 1; fatorial--) {
        numero = numero * fatorial; 
    }    
    return numero;
}


/* 3 */
function dolarConvertido (real){
    let dolar = real * 4.8;
    return dolar.toFixed(2);
}

/* 4 */
function areaPerimetroRetangulo (altura, largura) {
    let area = largura * altura;
    let perimetro = 2 * (altura + largura); 
    
    console.log(`Área da sala: ${area} metros²`);
    console.log(`Perímetro da sala: ${perimetro} metros`)
}

/* 5 */ 
function areaPerimetroCirculo (raio){
    let area = 3.14 * (raio ** 2);
    let perimetro = 2 * 3.14 * raio;
    console.log(`Área da sala: ${area} metros²`);
    console.log(`Perímetro da sala: ${perimetro} metros`)    
}

/* 6 */
function tabuada (numero){
    let base = 1;
    let tabuada;
    while(base <= 10 ){
        tabuada = numero * base;
        base++;
        console.log(`${numero} x ${base} = ${tabuada}`);
    }
}