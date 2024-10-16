//
const numEscolhido = 10;
let palpite = 0; // Inicializa a variável de palpite do usuário

// Loop até que o usuário acerte o número
while (palpite !== numEscolhido) {
    // Solicita que o usuário insira um número
    palpite = Number(prompt("Digite um número de 0 a 10:"));

    // Verifica se o palpite é válido
    if (palpite < 0 || palpite > 10 || isNaN(palpite)) {
        alert("Por favor, digite um número válido entre 0 e 10.");

    } else if (palpite === numEscolhido) {
        alert("Parabéns, você acertou!");

    } else {
        alert("Tente novamente.");
    }
}
