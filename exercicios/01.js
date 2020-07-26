const sum = (a, b) => console.log(a + b)
const subtraction = (a, b) => console.log(a - b)
const multiplication = (a, b) => console.log(a * b)
const division = (a, b) => console.log(a / b)

const run = (operation, a, b) => operation(a, b)

run(sum, 1, 1)
run(subtraction, 10, 2)
run(multiplication, 4, 5)
run(division, 30, 3)