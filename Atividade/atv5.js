const N1 = Number(prompt("Digite a nota da primeira prova (N1):"));
const N2 = Number(prompt("Digite a nota da segunda prova (N2):"));

const media = (N1 + N2) / 2;

const resultado = media >= 6 ? "Aprovado" : "Reprovado";

alert(`Média do aluno: ${media}`);
alert(`Resultado: ${resultado}`);