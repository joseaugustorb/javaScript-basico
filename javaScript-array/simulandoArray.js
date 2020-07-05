const amostArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(amostArray)

Object.defineProperty(amostArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})
console.log(amostArray[0])

const myArray = ['Rafael', 'Ana', 'Bia']
console.log(amostArray.toString(), myArray)

