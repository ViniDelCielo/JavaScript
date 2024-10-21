
function classificarIdade(idade) {
    if (idade >= 0 && idade <= 12) {
        return "Criança";
    } else if (idade >= 13 && idade <= 17) {
        return "Adolescente";
    } else if (idade >= 18 && idade <= 64) {
        return "Adulto";
    } else if (idade >= 65) {
        return "Idoso";
    } else {
        return "Idade inválida";
    }
}

let idade = prompt("Digite a sua idade:");
idade = parseInt(idade);
let categoria = classificarIdade(idade);
alert("A categoria correspondente à sua idade é: " + categoria)