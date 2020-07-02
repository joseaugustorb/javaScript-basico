let comparaComThis = function(parametros) {
    console.log(this === parametros)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = parametros => console.log(this === parametros)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)