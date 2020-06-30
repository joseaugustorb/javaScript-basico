const person = {
    name: 'Ana',
    age: 5,
    weight: 25
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

// A partir da função entries, é possível percorrer cada elemento do array gerado.
const getAttributeAndValue = ([attribute, value]) => console.log(`${attribute}: ${value}`)
Object.entries(person).forEach(getAttributeAndValue)

// Define as propriedades de um objeto
Object.defineProperty(person, 'birthday', {
    enumerable: true,
    writable: false,
    value: '01/01/2015'
})

console.log(person)
person.birthday = '20/01/2015'

// Não alterou a data pois a propriedade "writable" está definida como false
console.log(person.birthday)

// Object.assign (ECMAScript 2015)
const receiver = { a: 1 }
const object1 = { b: 2 }
const object2 = { c: 3, a: 4 }
const obj = Object.assign(receiver, object1, object2)

Object.freeze(obj)
obj.c = 5
console.log(obj)