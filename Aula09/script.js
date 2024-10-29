function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(altura) || isNaN(peso)) {
        resultado.innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;

    if (imc < 18.5) {
        resultado.innerHTML += " - Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.innerHTML += " - Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        resultado.innerHTML += " - Sobrepeso";
    } else {
        resultado.innerHTML += " - Obesidade";
    }
}
