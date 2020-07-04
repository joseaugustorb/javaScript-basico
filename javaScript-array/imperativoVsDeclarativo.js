// Um array consiste em uma matriz ou coleção de dados ou matriz de um mesmo tipo. 
// Podemos acessar o seu conteúdo por meio do índice.
// Em JS, um array pode conter dados de tipos diferentes, porém, por boas práticas,
// não é recomendado criar um array com dados de tipos heterogêneos.

const names = ['Ana', 'Bruno', 'Carla', 'Diogo', 'Eliana']

// Código imperativo
function getFirstLetters() {
    const firstLetters = []
    for (let i in names) {
        firstLetters.push(names[i].substring(0, 1))
    }
    return firstLetters
}
console.log(getFirstLetters())

// Código declarativo
const getFirstLetter = name => name[0]
const firstLetters = names.map(getFirstLetter)
console.log(firstLetters)