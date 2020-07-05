function iSpeakTrueOrFalse(value) {
    if(value) {
        console.log('Verdade:' + value)
    } else {
        console.log('Falso: ' + value)
    }
}

iSpeakTrueOrFalse()
iSpeakTrueOrFalse(null)
iSpeakTrueOrFalse(undefined)
iSpeakTrueOrFalse(NaN)
iSpeakTrueOrFalse('')
iSpeakTrueOrFalse(0)
iSpeakTrueOrFalse(-1)
iSpeakTrueOrFalse(' ')
iSpeakTrueOrFalse('?')
iSpeakTrueOrFalse([])
iSpeakTrueOrFalse([1, 2])
iSpeakTrueOrFalse({})