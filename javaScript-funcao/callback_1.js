// Função callback é uma função resposta, que é chamada quando algum evento ocorre.
// A callback define a regra que será executada quando um evento ocorre.

const carBrands = ['BMW', 'Maserati', 'Porsche']

// Neste caso, a regra é exibir no console índice e valor de cada elemento do array "carBrands".
const showIndexAndValue = (value, index) => console.log(`${index} ${value}`)

// Para cada elemento do array "carBrands", a função callback "showIndexAndValue"
// é chamada. Ou seja, neste caso, cada iteração com um elemento do array é um evento.
carBrands.forEach(showIndexAndValue)