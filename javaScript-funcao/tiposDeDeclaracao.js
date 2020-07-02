// Function expression
const evidenceText = function(text) {
    return `${text}!!!`
}

// Named function expression
const transformsText = function transformsText(text) {
    return text.toUpperCase()
}

// Uma característica de se usar uma function declaration, é que é possível
// executá-la antes de sua declaração, como é possível ver abaixo. Porém,
// isso naõ ocorre com as function expression. A chamada abaixo só não resultou
// em erro pois as funções "evidenceText" e "transformsText" já tinham  sido
// declaradas acima. 

console.log(showText(evidenceText)(transformsText)('Olá'))

// Function declaration
function showText(fn1) {
    return function(fn2) {
        return function(text) {
            return fn1(fn2(text))
        }
    }
}