// Construindo um forEach a partir de Array.prototype
Array.prototype.myForEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const approved = ['José', 'Agatha', 'Daniel', 'Michele']
const failed = ['Gabriela', 'Mateus', 'Leonardo']
const students = []

const getNameOfApprovedOrFailed = name => console.log(name)
const addApprovedAndFailed = value => students.push(value)
const getIndexValueAndArray = (value, index, array) => console.log(index, value, array)

approved.forEach(getNameOfApprovedOrFailed) // com forEach
failed.myForEach(getNameOfApprovedOrFailed) // com myForEach

approved.forEach(addApprovedAndFailed) // adiciona aprovados ao array "students"
failed.myForEach(addApprovedAndFailed) // adiciona reprovados ao array "students"

students.forEach(getIndexValueAndArray)