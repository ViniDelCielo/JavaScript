// Inicie os dois primeiros números da sequência
let num1 = 0, num2 = 1;
let conta = 0;

// Defina a quantidade de números da sequência
const n = 10;

// Loop para gerar a sequência de Fibonacci
while (conta < n) {
    console.log(num1);
    // Atualizando os valores
    let temp = num1;
    num1 = num2;
    num2 = temp + num2;
    conta++;
}
