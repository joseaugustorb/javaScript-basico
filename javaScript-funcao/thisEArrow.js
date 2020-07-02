let comparaComThis = function(parametros) {
    console.log(this === parametros)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// O "this" em uma função arrow aponta para module.exports, diferentemente
// de uma função tradicional JS que aponta para global.
let comparaComThisArrow = parametros => console.log(this === parametros)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
console.log(module.exports === this)

// Mesmo tentando mudar a referência do this com bind, em uma função arrow
// isso não tem efeito, ou seja, o contexto do this será o mesmo.
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)