const employee1 = { name: 'João Avelar', occupation: 'Driver', active: false }
const employee2 = { name: 'Ana Laura', occupation: 'Driver', active: true }
const employee3 = { name: 'Daniel de Souza', occupation: 'Driver', active: true }
const employee4 = { name: 'Amanda Nunes', occupation: 'Driver', active: true }

// Rest/Spread com objeto
const clonedEmployee1 = { ...employee1 /* Spread */, active: true }
console.log(clonedEmployee1)

const names = element => element.name

const showsEmployeeNames = (...objects /* Rest */) => {
    return [ ...objects /* Spread */].map(names)
}

const activeEmployees = element => { 
    if(element.active) {
        return element
    }
}

const showsActiveEmployees = (...objects /* Rest */) => {
    return [ ...objects /* Spread */].filter(activeEmployees).map(names)
}

const nameOfEmployees = showsEmployeeNames(employee1, employee2, employee3, employee4)
console.log(nameOfEmployees)

const nameOfActiveEmployees = showsActiveEmployees(employee1, employee2, employee3, employee4)
console.log(nameOfActiveEmployees)

// Rest/Spread com array
const employees = [ { ...employee1 /* Spread */} ]
console.log(employees)

function addsNewEmployees(...newEmployees /* Rest */) {
    Array.prototype.push.apply(employees, [...newEmployees /* Spread */])
}

addsNewEmployees(employee2, employee3, employee4)
console.log(employees)