function itWorksOrNot(chanceOfError) {
    return new Promise((resolve, reject) => {
        try {
            const randomNumber = Math.random()
            if (randomNumber < chanceOfError) {
                reject('Ocorreu um erro!')
            } else {
                resolve(randomNumber)
            }
        } catch (e) {
            reject(e)
        }
    })
}

itWorksOrNot(0.5)
    .then(number => console.log(`Número sorteado: ${number}`))
    .catch(error => console.log(`Ops! ${error}`))
