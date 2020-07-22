function generateNumberBetween(min, max, time) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        setTimeout(() => {
            const factor = max - min + 1
            const randomNumber = parseInt(Math.random() * factor) + min
            resolve(randomNumber)
        }, time)
    })
}

function generateMultipleNumbers() {
    return Promise.all([
        generateNumberBetween(1, 20, 4000),
        generateNumberBetween(1, 20, 500),
        generateNumberBetween(1, 20, 1000),
        generateNumberBetween(1, 20, 2000),
        generateNumberBetween(1, 20, 300)
    ])
}

console.time('promise')

generateMultipleNumbers()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })
