// Array como parâmetro
const generateRandomNumber = ([min = 0, max = 100] /* destructuring */) => {
    if(min > max) [min, max] /* destructuring */ = [max, min]
    const randomNumber = Math.random() * (max - min) + min
    return Math.floor(randomNumber)
}

const between5And10 = [6, 9]
console.log(generateRandomNumber(between5And10))

const from1To3 = [3, 1]
console.log(generateRandomNumber(from1To3))