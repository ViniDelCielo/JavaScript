

function calcularMedia(nota1, nota2) {
    nota1 = Number(prompt(`Qual a sua primeira nota?`))
    nota2 = Number(prompt(`Qual a sua segunda nota?`))
    let media = (nota1 + nota2) / 2
    alert(`A sua média foi: ${media}`)
}

calcularMedia()