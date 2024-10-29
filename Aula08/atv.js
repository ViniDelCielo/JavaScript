function calcularIMC() {
    let peso = parseFloat(prompt(`Digite seu peso:`));
let altura = parseFloat(prompt(`Digite sua altura:`));
let imc = peso / (altura * altura);

if (imc < 16) {
    alert(`Seu imc é de: ${imc.toFixed(2)}.Você está abaixo do peso. `)
} else if (imc < 18.4) {
    alert(`Seu imc é de: ${imc.toFixed(2)}.Você está abaixo do peso. `)
} else if (imc < 24.9) {
    alert(`Seu imc é de: ${imc.toFixed(2)}.Você tem um peso normal.`);
} else if (imc < 29.9) {
    alert(`Seu imc é de: ${imc.toFixed(2)}.Você está acima do peso`);
} else if (imc < 34.9) {
    alert(`Seu imc é de: ${imc.toFixed(2)}.Você está com Obresidade de grau I`);
} else if (imc < 40) {
    alert(`Seu imc é de: ${imc.toFixed(2)}.Você está com Obresidade de grau II`);
} else {
    alert(`Seu imc é de: ${imc.toFixed(2)}.Você está com Obresidade de grau III`)
}
}
calcularIMC()



