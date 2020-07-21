// Sem Promise (Callbacks aninhadas)
function esperarPor(seconds = 2) {
    setTimeout(() => {
        console.log('Executando callback')
        setTimeout(() => {
            console.log('Executando callback')
            setTimeout(() => {
                console.log('Executando callback')
            }, seconds * 1000)
        }, seconds * 1000)
    }, seconds * 1000)
}

esperarPor()

// Com Promise
function waitFor(seconds = 2) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando promise')
            resolve()
        }, seconds * 1000)
    })
}

setTimeout(() => {
    waitFor()
        .then(waitFor)
        .then(waitFor)
}, 7000)

