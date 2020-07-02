// JSON é um formato de dados. É majoritariamente usado para interoperabilidade
// de sistemas em Web Services. Ou seja, é um formato apenas textual, que carrega 
// consigo apenas dados. Além disso, por ser textual, é simples de ser lido.

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

console.log(obj)

// Não exibe comportamentos des objetos, somente dados. Ou seja,
// a função "soma" de "obj" não é exibida.
console.log(JSON.stringify(obj))

// Para que se tenha um formato JSON válido é necessário que os atributos
// estejam delimitados com aspas dupla
console.log(JSON.parse('{ "d": "Olá", "e": true, "f": {}, "g": [] }'))

