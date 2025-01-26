let amigos = [];
listarAmigos();

function adicionarAmigo(){
    let novoAmigo = document.getElementById('amigo').value;
    if (novoAmigo == "") {
        alert('Por favor, insira um nome válido.');
    }
    amigos.push(novoAmigo);
    limparCampo();
}

function limparCampo () {
    novoAmigo = document.getElementById('amigo');
    novoAmigo.value = '';
}

function listarAmigos(amigos) {
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        listaDeAmigos.innerHTML = amigos[i];
        
    }
}