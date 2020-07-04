class Person {
    constructor(name) {
        this.name = name
    }
    talk = () => console.log(`Meu nome é ${this.name}`)
}

const jose = new Person('José')
jose.talk()

// Função Factory
const person = name => {
    return {
        talk: () => console.log(`Meu nome é ${name}`)
    }
}

const joao = person('João')
joao.talk()