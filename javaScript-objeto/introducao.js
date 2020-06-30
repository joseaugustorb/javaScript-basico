// objeto é uma coleção dinâmica de pares chave/valor

const product = new Object ({ 
    name: 'Feijão', 
    amount: 2,
    brand: 'Genérica'
})

product.name = 'Arroz' // altera nome do produto 
delete product.brand // deleta o atributo marca

const car = {
    model: 'M5',
    year: '2018',
    price: 500000,
    owner: {
        name: 'José',
        age: 30,
        address: {
            address: '700 W. Sth Avenue',
            city: 'Miami',
            state: 'Flórida',
            country: 'EUA' 
        }
    },
    conductors : [{
        name: 'Bianca',
        age: 25
    }, {
        name: 'Leonardo',
        age: 25
    }]
}

console.log(car.owner.address.country) // acesso pelo operador "ponto"
console.log(car['owner']['address']['country']) // acesso por strings
console.log(car.conductors[0].name)
delete car.conductors[0]
console.log(car.conductors[0]) // undefined

