function getPrice(tax = 0, coin = 'R$') {
    return `${coin}${this.price * (1 - this.discount) * (1 + tax)}`
}

global.price = 10000
global.discount = 0.1

// Função chamada a partir do escopo global
console.log(getPrice())

const car = {
    brand: 'Tesla',
    model: 'model 3',
    price: 35000,
    discount: 0,
    getPrice
}

// Função chamada a partir de um objeto
console.log(car.getPrice(0,'$'))

const product = {
    name: 'Smart TV',
    price: 1000,
    discount: 0
}

// call e apply são duas formas diferentes de se chamar uma função em JS

// Usando call
// O primeiro parâmetro é o objeto usado como contexto de execução da função
console.log(getPrice.call(product, 0.05, '$'))

// Usando apply
// O primeiro parâmetro é o objeto usado como contexto de execução da função
// Diferentemente da função call, os outros parâmetros são passados através de um array
console.log(getPrice.apply(car, [0.1, '$']))