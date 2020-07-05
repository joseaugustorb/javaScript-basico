Array.prototype.myReduce = function(callback, initialValue) {
    const initialIndex = initialValue ? 0 : 1
    let acc = initialIndex || this[0]
    for (let i = initialValue; i < this.length; i++) {
        acc = callback(acc, this[i], i, this)
    }
    return acc
}

const students = [
    { name: 'João', grade: 7.3, colleger: false },
    { name: 'Maria', grade: 9.2, colleger: true },
    { name: 'Pedro', grade: 9.8, colleger: false },
    { name: 'Ana', grade: 8.7, colleger: true }
]

const colleger = student => student.colleger
const areTheyAllCollege = (result, colleger) => result && colleger
const areThereAnyCollege = (result, colleger) => result || colleger

const areAllStudentsCollegers = students
    .map(colleger)
    .reduce(areTheyAllCollege)

console.log(`Todos os estudantes são universitários?\n Resposta: ${areAllStudentsCollegers}`)

const areThereAnyStudentColleger = students
    .map(colleger)
    .myReduce(areThereAnyCollege)

console.log(`Algum estudante é universitário?\n Resposta: ${areThereAnyStudentColleger}`)
