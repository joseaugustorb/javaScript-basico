console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// A partir de prototype é possível criar novas funcionalidades.

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('String'.reverse())

Array.prototype.last = function() {
    return this[this.length - 1]
}

console.log('String'.split('').last())