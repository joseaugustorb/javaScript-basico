const division = (dividend, divider) => {
    const quotient = Math.trunc(dividend / divider)
    const rest = dividend % divider
    return `quociente: ${quotient}, resto: ${rest}`
}

const result = division(13, 2) 
console.log(result) // quociente: 6, resto: 1
