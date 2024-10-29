// const calcularMedia = (n1 = 0, n2 = 0) => {
//     let media = (n1 + n2) / 2
//     return media
// }

// console.log(`A média do aluno é de : ${calcularMedia(5,10)}`);
const mudarCor = () => {
    let primeiraDiv = document.querySelector('div');
    primeiraDiv.style.backgroundColor = 'red'
}
function voltarCor () {
    let primeiraDiv = document.querySelector('div');
    primeiraDiv.style.backgroundColor = 'white'
}
