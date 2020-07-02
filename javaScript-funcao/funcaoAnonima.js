// Atribuição de uma função anônima a const, passando a ter um nome.
const sum = function (x, y) {
    return x + y
}

const subtraction = (x, y) => x - y

const showsResult = function (a, b, fn = sum) {
    console.log(fn(a, b))
}

showsResult(1, 2)
showsResult(5, 3, subtraction)

// Função anônima como parâmetro
showsResult(2, 2, function (x, y) {
    return x * y
})
showsResult(10, 2, (x, y) => x / y) // Uma função arrow é sempre anônima

// Função anônima em objetos
function Person(name) {
    this.name = name,
    this.talk = function(greeting) {
        return `${this.name}: ${greeting}`
    }
}

const jose = new Person('José')
console.log(jose.talk('Bom dia!'))

const ana = new Person('Ana')
console.log(ana.talk('Bom dia!'))
