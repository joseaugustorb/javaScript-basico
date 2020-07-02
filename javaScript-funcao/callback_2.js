const grades = [8.7, 4.5, 5.8, 3.9, 7.5, 10.0]

// Sem callback
// Código imperativo
const gradesLessThan5 = []
for(let i in grades) {
    if(grades[i] < 5.0) {
        gradesLessThan5.push(grades[i])
    }
}

console.log(gradesLessThan5)

// Com callback
// Código declarativo
const gradesLessThan7 = grade => grade < 7.0
const lowGrades = grades.filter(gradesLessThan7)
console.log(lowGrades)
