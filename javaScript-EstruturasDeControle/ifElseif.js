Number.prototype.between = function(start, end) {
    return this >= start && this <= end
}

const showResult = function(grade) {
    if(grade.between(9, 10)) {
        console.log('Quadro de Honra')
    } else if(grade.between(7, 9)) {
        console.log('Aprovado') 
    } else if(grade.between(5, 7)) {
        console.log('Recuperação')
    } else if(grade.between(0, 5)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

showResult(9)
showResult(7)
showResult(5)
showResult(4)
showResult(11)
showResult(-1)