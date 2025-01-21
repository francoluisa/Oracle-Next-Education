





/* 1 */
function imcCalculo (alturaM, pesoKg){
    let imc = pesoKg / (alturaM ** 2);
    return imc;

}

/* 2 */


/* function fatorial (numero){
    for (let fatorial = numero - 1; fatorial >= 1; fatorial--) {
        numero = numero * fatorial; 
    }    
    return numero;
}*/


/* 3 */

function dolarConvertido (real){
    let dolar = real * 4.8;
    return dolar;
}

/* 4 */


function area (altura, largura) {
    let area = largura * altura;
    return area;
}
function perimetro (altura, largura){
    let perimetro = 2 * (altura + largura); 
    return perimetro;
}

function areaPerimetro(altura,largura){
    area(altura,largura);
    perimetro(altura,largura);
    return;
}
/* 5 */ 

