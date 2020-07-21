function generateNumberBetween(min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const factor = max - min + 1
        const randomNumber = parseInt(Math.random() * factor) + min
        resolve(randomNumber)
    })
}

generateNumberBetween(10, 15)
    .then(number => console.log(`Número gerado: ${number}`))
