// Closure é o escopo criado quando a função é declarada.
// Esse escopo permite a função acessar e manipular variáveis externas à função.

const x = 'Global'

function out() {
    const x = 'Local'
    function inside() {
        return x
    }
    return inside
}

const isLocalOrGlobal = out()
console.log(isLocalOrGlobal())