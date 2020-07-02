function Person() {
    this.age = 0

    setInterval(function() {
        this.age++
        console.log(this.age)
    }.bind(this), 1000)
}

// A sequência numérica não funcionou, pois "this" mudou de contexto
// passando para o contexto da função setInterval. Para que isso não 
// ocorra, uma solução viável é usar o bind.

// new Person

// Usando arrow
function Person2() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Person2