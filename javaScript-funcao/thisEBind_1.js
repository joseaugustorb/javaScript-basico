const person = {
    greeting: 'Olá',
    talk() {
        console.log(this.greeting)
    }
}

person.talk()

// A partir desta atribuição, o "this" passa a ter outro contexto léxico.
const talk = person.talk

talk() // conflito entre paradigmas: funcional e OO

// a função bind define o contexto, de acordo com o que é passado para ela.
const greetSomeone = person.talk.bind(person)
greetSomeone()
