// Loop para imprimir os números primos de 1 a 20
for (let num = 2; num <= 20; num++) {
    let teste = true; // Inicializa como verdadeiro

    // Verifica se o número é primo
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            teste = false; // Não é primo
            break; // Sai do loop
        }
    }

    // Se for primo, imprime o número
    if (teste) {
        console.log(num);
    }
}

