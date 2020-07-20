function talkAfterOf(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

const speech = promiseIs => pretty => cool => {
    console.log(`${promiseIs} ${pretty} ${cool}`)
}
const speechPromiseIs = () => 'Promise é...'
const speechPretty = () => 'bem...'
const speechCool = () => 'legal!'
const convertToUpperCase = text => text.toUpperCase()

talkAfterOf(3)
    .then(speechPromiseIs)
    .then(convertToUpperCase)
    .then(console.log)

talkAfterOf(6)
    .then(speechPretty)
    .then(convertToUpperCase)
    .then(console.log)

talkAfterOf(9)
    .then(speechCool)
    .then(convertToUpperCase)
    .then(console.log)

speech('Promise é')('bem')('legal!')
