// Supoẽ que esse objeto aponte para o endereço de memória xxx
const studentX = { name: 'Pedro', age: '17' }

// Supoẽ que esse objeto aponte para o endereço de memória yyy
let studentY = { name: 'Maria', age: '18' }

// 1) Como studentX é const, então não é possível esse objeto receber
// outra referência, ou seja, ele não vai apontar para outra referência
// de memória. Sua referência de memória continua sendo xxx.

// studentX = studentY 

// 2) Como studentY é let, esse objeto pode apontar para outra referência.
// Neste caso, studentY passa a apontar para studentX. Portanto, o endereço
// de memória de studentY passa a ser também xxx, não mais yyy.

studentY = studentX
console.log(studentX)
console.log(studentY)

// 3) Como studentY passou a apontar para studentX, então studentY
// pode fazer alterações em studentX.

studentY.name = 'João'
console.log(studentX)

// 4) Usando Object Frezee não é possível que o objeto seja alterado, pois
// o mesmo passa a ficar congelado.

Object.freeze(studentX)
studentY.name = 'Leonardo'
console.log(studentX.name) // João
console.log(Object.isFrozen(studentX))

// 5) Criando um objeto constante

// Neste caso, assim que criado o objeto já passa a não poder ser alterado.
const studentZ = object.freeze({ name: 'Amanda', age: '19' })