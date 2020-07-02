function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1, 4, 4, 6))
console.log(soma(1, 2, ' é igual a soma de ', '1', ' + ', '2'))