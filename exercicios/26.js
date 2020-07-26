const addNumbersBetween1And100InAnArray = array => {
    for(let count = 2; count < 100; count++) {
        array.push(count)
    }
    return array
}

const evenNumbers = element => element % 2 === 0
const evenNumberArray = addNumbersBetween1And100InAnArray([]).filter(evenNumbers)
console.log(...evenNumberArray)