const school = [{
    name: 'Class A1',
    students: [{
        name: 'Gustavo',
        grade: 8.1
    }, {
        name: 'Ana',
        grade: 9.3
    }]
}, {
    name: 'Class A2',
    students: [{
        name: 'Rebeca',
        grade: 8.9
    }, {
        name: 'Roberto',
        grade: 7.3
    }]
}]

const getStudentsGrade = student => student.grade
const getSchoolClassGrades = schoolClass => schoolClass.students.map(getStudentsGrade)

const gradesPerClass = school.map(getSchoolClassGrades)
console.log(gradesPerClass)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const grades = school.flatMap(getSchoolClassGrades)
console.log(grades)

