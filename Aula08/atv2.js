// Função de conversão de BRL para EUR
function converterRealParaEuro(valorReal, valorEuro) {
    return valorReal / valorEuro;
}

// Exemplo de uso
let valorReal = Number(prompt(`Digite um Valor em Real`)) // valor em reais
let valorEuro = 6.16; // cotação do euro
let valorEmEuros = converterRealParaEuro(valorReal, valorEuro);
alert(`R$${valorReal} em Euros é €${valorEmEuros.toFixed(2)}`)

