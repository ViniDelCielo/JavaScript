let idade;

do {
    idade = prompt(`Insira sua idade (Que seja maior que 0):`);
    idade = Number(idade);
} while (idade <= 0 || isNaN(idade));

alert(`idade válida inserida ${idade}`)