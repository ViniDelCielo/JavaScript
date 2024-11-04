let idades = [16, 48, 23, 22, 45, 8, 12];
let maiorIdade = idades.filter(idade => idade >= 18);
maiorIdade.forEach(idade => {
  console.log(`Sua idade é: ${idade}`);
});
