const integerNumbers = [-5, 0, 30, -10, -16, 4]

const negativeNumbers = element => element < 0
const amountOfNegativeNumbers = integerNumbers.filter(negativeNumbers).length
console.log(amountOfNegativeNumbers)