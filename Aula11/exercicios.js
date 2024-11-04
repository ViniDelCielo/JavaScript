let carros = ['Celta', 'Gol', 'Prisma', 'Chevette']

carros.forEach( (carros, id, completo) =>{
    console.log(`O modelo do seu carro é: ${carros}`);
    console.log(`O id do seu carro é: ${id} `);
    console.log(`Lista: ${completo}`);
    console.log(`----------------------------------------`);
})

let filtrar = carros.filter((carros)=>{
    return carros > 'Gol'
})
console.log(carros);
console.log(filtrar);