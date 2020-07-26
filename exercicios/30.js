const integerNumbers = [5, 0, 30, 10]

const highestValue = integerNumbers.reduce((previousValue, currentValue) => Math.max(previousValue, currentValue))
console.log(highestValue)

const lowerValue = integerNumbers.reduce((previousValue, currentValue) => Math.min(previousValue, currentValue))
console.log(lowerValue)

