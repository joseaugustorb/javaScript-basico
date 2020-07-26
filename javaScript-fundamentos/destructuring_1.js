// Destructuring a partir de um objeto
const person = {
    name: 'Joana',
    surname: null,
    age: 25,
    address: {
        state: 'SP',
        city: 'São Paulo'
    }
}

const { name: n, surname, age: a } = person
console.log(n, surname, a)

const { address: { state: s, city: c } } = person
console.log(s, c)

// Destructuring a partir de um array
const [student1, student2, student3] = ['Jonas', 'Bianca', 'Amanda']
console.log(student1, student2, student3)

const [, [, number]] = [[1, 2], [3, 4]]
console.log(number)