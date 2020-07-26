const isDivisibleBy3 = number => {
    const integerNumber = Math.trunc(number)
    if(integerNumber % 3 === 0) {
        return true
    } else {
        return false
    }
}

const result = isDivisibleBy3(9.4)
console.log(result)
