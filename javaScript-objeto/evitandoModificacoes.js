// Object.preventExtensions impedi que novos atributos sejam adicionados
// ao objeto. Porém, é possível deletá-los e também alterá-los.
const person = Object.preventExtensions({
    name: 'José', age: 30, height: 1.80
})

console.log('Objeto extensível:', Object.isExtensible(person))

person.age = 45
person.height = 1.90
delete person.height
person.height = 1.85 // não é possível adicionar
console.log(person)

// Object.seal impedi que novos atibutos sejam adicionados ao objeto e que sejam
// excluídos. Porém, é possível alterar os atributos.
const product = { name: 'Arroz Integral', price: 5.00 }
Object.seal(product)

console.log('Objeto selado: ', Object.isSealed(product))

product.name = 'Feijão'
delete product.name // não é possível deletar
product.weight = '5Kg' // não é possível adicionar
console.log(product)