const integerNumbers = [5, 0, 30, 31, 10]

const evenNumbers = element => element % 2 === 0
const oddNumbers = element => element % 2 === 1

const amountOfPairNumbers = integerNumbers.filter(evenNumbers).length
console.log(amountOfPairNumbers)

const amountOfOddNumbers = integerNumbers.filter(oddNumbers).length
console.log(amountOfOddNumbers)