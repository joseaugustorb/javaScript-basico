Array.prototype.myMap = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const cart = [
    '{ "name": "Borracha", "price": 3.45 }',
    '{ "name": "Caderno", "price": 13.90 }',
    '{ "name": "Kit de Lápis", "price": 41.22 }',
    '{ "name": "Caneta", "price": 7.50 }'
]

const convertJSONToObject = jason => JSON.parse(jason)
const getPrice = object => parseFloat(object.price).toFixed(2).replace('.', ',')

const prices = cart
    .map(convertJSONToObject)
    .myMap(getPrice)

console.log(prices)