const sequence = {
    _value: 0, //convenção
    get value() { return ++this._value },
    set value(value) {
        if(value > this.value) {
            this.value = value
        } else {
            console.log('Não é possível alterar valor atual por um valor menor.')
        }
    }
}

console.log(sequence.value, sequence.value)

// Como o valor atual de sequência é 2, então 1 não será atribuído a _valor 
sequence.value = 1

// Neste caso, _valor passa a ser 6. A atribuição foi aceita, já que 5 é maior
// do que 2, este que era o valor atual antes dessa atribuição.
sequence.value = 5
console.log(sequence.value)