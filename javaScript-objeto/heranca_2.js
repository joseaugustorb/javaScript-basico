const father = { name: 'Pedro',  eyeColor: 'lightBrown'}

const son = Object.create(father)
son.name = 'Douglas'
console.log(son.name)
console.log(son.eyeColor)

const daughter = Object.create(father, {
    name: { value: 'Ana', writable: false, enumerable: true }
})

console.log(daughter.name)
console.log(daughter.eyeColor)

// keys exibe atributos do objeto
console.log(Object.keys(father))
console.log(Object.keys(son))
console.log(Object.keys(daughter))

for(let key in son) {
    son.hasOwnProperty(key) ?
        console.log(`Pertence ao objeto: ${key}`) :
        console.log(`Por herança: ${key}`)
}