Array.prototype.myFilter = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const products = [
    { name: 'Notebook', price: 2499, fragile: true },
    { name: 'iPad Pro', price: 4199, fragile: true },
    { name: 'Copo de Vidro', price: 12.49, fragile: true },
    { name: 'Copo de Plástico', price: 18.99, fragile: false }
]

const priceAboveOf500 = product => product.price > 500
const isFragile = product => product.fragile

const selectedProducts = products
    .filter(isFragile)
    .myFilter(priceAboveOf500)

console.log(selectedProducts)