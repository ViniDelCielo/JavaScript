// Solicita que o usuário insira sua idade
const idade = parseInt(prompt("Por favor, digite sua idade:"));

// Verifica se a entrada é um número válido
if (isNaN(idade) || idade < 0) {
    alert("Por favor, insira uma idade válida.");
} else {
    // Verifica a faixa etária
    if (idade < 18) {
        alert("Você é menor de idade.");
    } else if (idade >= 18 && idade < 60) {
        alert("Você é adulto.");
    } else {
        alert("Você é idoso.");
    }
}
