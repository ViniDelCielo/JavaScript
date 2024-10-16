// Solicita que o usuário insira sua idade
const idade = parseInt(prompt("Por favor, digite sua idade:"));

// Verifica se a entrada é um número válido
if (isNaN(idade) || idade < 0) {
    alert("Por favor, insira uma idade válida.");
} else {
    // Verifica se a idade é maior ou igual a 18
    if (idade >= 18) {
        alert("Você pode dirigir.");
    } else {
        alert("Você ainda não pode dirigir.");
    }
}
