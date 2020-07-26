const formatsValue = value => `R$${parseFloat(value).toFixed(2).replace('.', ',')}`
const formattedValue = formatsValue(0.1 + 0.2)
console.log(formattedValue)