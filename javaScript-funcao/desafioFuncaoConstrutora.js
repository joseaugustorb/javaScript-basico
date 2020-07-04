// Desafio: transformar uma classe em função construtora

class Person {
    constructor(name) {
        this.name = name
    }
    talk = () => console.log(`Meu nome é ${this.name}`)
}

const jose = new Person('José')
jose.talk()

// Função construtora
function Pessoa(name) {
    this.name = name
    this.talk = () => console.log(`Meu nome é ${this.name}`)
}

const amanda = new Pessoa('Amanda')
amanda.talk()