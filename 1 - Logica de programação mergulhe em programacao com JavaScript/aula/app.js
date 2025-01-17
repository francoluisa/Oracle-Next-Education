alert("Boas vindas ao jogo do número secreto");
let numeroSecreto;

let dificuldade = prompt(
  "Escolha sua dificuldade: 1 - fácil, 2 - médio ou 3 - difícil."
);
if (dificuldade == 1) {
  numeroSecreto = parseInt(Math.random() * 10) + 1;
} else if (dificuldade == 2) {
  numeroSecreto = parseInt(Math.random() * 100) + 1;
} else {
  numeroSecreto = parseInt(Math.random() * 1000) + 1;
}
console.log(numeroSecreto);
console.log(dificuldade);

let chute;
let tentativas = 1;
let alcance;

if (dificuldade == 1) {
    alcance = "Escolha um número entre 1 e 10.";
} else if (dificuldade == 2) {
    alcance = "Escolha um número entre 1 e 100.";
} else {
    alcance = "Escolha um número entre 1 e 1000.";
}

// enquanto chute não for igual ao numero secreto
while (chute != numeroSecreto) {
  chute = prompt(alcance);
  // se chute for igual ao numero secreto
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`
);

/* if (tentativas > 1){
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
} */
