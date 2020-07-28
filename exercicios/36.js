const multipliesElements = (array, number) => {
    const integerNumber = parseInt(number)
    const multipliesElementByAnInteger = element => element * integerNumber
    const newArray = array.map(multipliesElementByAnInteger)
    return newArray
}

console.log(multipliesElements([1, 2], 2))

const multipliesElementsIfGreaterThan5 = (array, number) => {
        const integerNumber = parseInt(number)
        const multipliesElementIfGreaterThan5 = element => {
            return element > 5 ? element * integerNumber : element
        }
        const newArray = array.map(multipliesElementIfGreaterThan5)
        return newArray
}

console.log(multipliesElementsIfGreaterThan5([1, 2, 6, 10], 2))
