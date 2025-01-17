let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarConsole (){
    console.log('O botão foi clicado');
}

function verificarAlert (){
    alert('Eu amo js');
}

function verificarPrompt () {
    let cidade = prompt('Diga o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function verificarSoma () {
    let numero1 = parseInt(prompt('Digite um número'));
    let numero2 = parseInt(prompt('Digite um segundo número'));
    let soma = numero1 + numero2;
    alert(`${numero1} + ${numero2} ${soma}`);
}