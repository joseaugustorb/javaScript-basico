// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// aconteceu no sétimo jogo.)

const recordsAndlowestScore = string => {
    // Função callback
    const convertToInteger = element => parseInt(element)

    // Convertendo "string" em um array composto de elementos de números inteiros
    const integerArray = string.split(' ').map(convertToInteger)

    const records = []
    // Função callback
    const getHigherScore = (value, index, array) => {
        if (value > array[index - 1]) {
            records.push(value)
        }
    }

    // Para cada iteração, compara a pontuação atual com a anterior, pegando a maior e adicionando-a
    // no array records
    integerArray.forEach(getHigherScore)

    Array.min = array => Math.min.apply(Math, array)
    const lowestScore = Array.min(integerArray)
    const lowestScoreIndex = integerArray.indexOf(lowestScore)

    const result = []
    result.push(records.length)
    result.push(lowestScoreIndex + 1)

    return result
}

console.log(recordsAndlowestScore('10 20 20 8 25 3 0 30 1'))