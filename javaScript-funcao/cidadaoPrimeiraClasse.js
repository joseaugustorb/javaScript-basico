// Função em JS é First-Class
// Higher-order function

// Criar de forma literal
function fun1() {}

// Armazenar em uma variável
const fun2 = function() {}

// Armazenar em um array
const array = [function(text) { return text }, fun1, fun2]

console.log(array[0]('Bom dia'))

// Armazenar em um atributo de objeto
const obj = {}
obj.talk = function() { return 'Boa tarde' }
console.log(obj.talk())

// Passar função como parâmetro
function talk(fn) {
    fn()
}

talk(function() { console.log('Boa noite') })

// Uma função pode retornar/conter uma função
function name(firstName) {
    return function(surname = '') {
        return `${firstName} ${surname}`
    }
}

const firstName = name('João')
console.log(firstName())

const fullName = firstName('Pereira')
console.log(fullName)

console.log(name('João')())
console.log(name('João')('Pereira'))

console.log(firstName() === name('João')())
console.log(fullName === name('João')('Pereira'))