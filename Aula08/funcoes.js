// media aluno
// nota1 e nota2
let nota1 = Number(prompt(`Qual a sua primeira nota?`))
let nota2 = Number(prompt(`Qual a sua segunda nota?`))
let media = (nota1 + nota2)/2
alert(`A sua média foi: ${media}`)

function calcularMedia(nota1 = 0, nota2 = 0) {
    let media = (nota1 + nota2)/2
    console.log(`Sua média é ${media}`);

}

