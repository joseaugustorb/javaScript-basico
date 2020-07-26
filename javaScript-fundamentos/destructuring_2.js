// Objeto como parâmetro
const generateRandomNumber = ({ min = 0, max = 100 } /* destructuring */) => {
    const randomNumber = Math.random() * (max - min) + min
    return Math.floor(randomNumber)
}

const between50And60 = { min: 51, max: 59 }
console.log(generateRandomNumber(between50And60))

const from0To10 = { min: 0, max: 10}
console.log(generateRandomNumber(from0To10))

// Passando um objeto vazio
console.log(generateRandomNumber({})) // Assume min = 0 e max = 100

