// Solicita que o usuário insira um número inteiro
let numero = parseInt(prompt("Digite um número inteiro:"));

// Verifica se o número é positivo, negativo ou zero
if (numero > 0) {
    alert("O número é positivo.");
} else if (numero < 0) {
    alert("O número é negativo.");
} else {
    alert("O número é zero.");
}