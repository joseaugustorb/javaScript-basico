const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// Remove o último elemento
pilots.pop()
console.log(pilots)

// Adiciona um elemento no final do array
pilots.push('Verstappen')
console.log(pilots)

// Remove o primeiro elemento
pilots.shift()
console.log(pilots)

// Adiciona um elemento no início do array
pilots.unshift('Hamilton')
console.log(pilots)

// splice pode adicionar ou remover elementos

// Adicionar
pilots.splice(2, 0, 'Bottas', 'Massa')
console.log(pilots)

// Remover
pilots.splice(3, 1)
console.log(pilots)

// slice retorna um novo array
const somePilots = pilots.slice(2)
console.log(somePilots)

const othersPilots = pilots.slice(1, 4)
console.log(othersPilots)

