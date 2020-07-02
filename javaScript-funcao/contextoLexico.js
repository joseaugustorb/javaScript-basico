const value = 'Global'

// A função carrega consigo o seu contexto léxico, ou seja, ela se
// lembra de onde ela foi declarada. 
const getValue = function() {
    console.log(value)
}

const showValue = function() {
    const value = 'Local'
    getValue()
}

showValue() // Exibe 'Global'

// Exibe "Global", pois mesmo que a função "getValue" tenha sido chamada em outro
// local (neste caso, no escopo da função "showValue"), ela vai procurar por "value",
// primeiramente, em seu escopo e se não achar ela procura por "value" no escopo em que
// foi declarada. Por isso, então, é que 'Local' não é exibido, mas sim 'Global'.