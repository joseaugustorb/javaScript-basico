function theTriangle({
    a = null,
    b = null,
    c = null
}) {
    return {
        a,
        b,
        c,
        isEquilateral() {
            if(this.a === this.b && this.a === this.c) {
                return true
            } else {
                return false
            }
        },
        isIsosceles() {
            if(this.a === this.b || this.a === this.c || this.b === this.c) {
                return true
            } else {
                return false
            }
        },
        isScalene() {
            if(this.a !== this.b && this.a !== this.c && this.b !== this.c) {
                return true
            } else {
                return false
            }
        },
        isClassifiedAs() {
            if(this.isEquilateral()) {
                return 'Equilátero'
            } else if (this.isIsosceles()) {
                return 'Isósceles'
            } else if(this.isScalene()){
                return 'Escaleno'
            }
        }
    }
}

const t1 = { a: 1, b: 1, c: 1}

console.log('t1')
console.log(theTriangle(t1).isEquilateral())
console.log(theTriangle(t1).isIsosceles())
console.log(theTriangle(t1).isScalene())
console.log(theTriangle(t1).isClassifiedAs())

const t2 = { a: 1, b: 1, c: 2}

console.log('t2')
console.log(theTriangle(t2).isEquilateral())
console.log(theTriangle(t2).isIsosceles())
console.log(theTriangle(t2).isScalene())
console.log(theTriangle(t2).isClassifiedAs())

const t3 = { a: 2, b: 1, c: 1}

console.log('t3')
console.log(theTriangle(t3).isEquilateral())
console.log(theTriangle(t3).isIsosceles())
console.log(theTriangle(t3).isScalene())
console.log(theTriangle(t3).isClassifiedAs())

const t4 = { a: 2, b: 2, c: 1}

console.log('t4')
console.log(theTriangle(t4).isEquilateral())
console.log(theTriangle(t4).isIsosceles())
console.log(theTriangle(t4).isScalene())
console.log(theTriangle(t4).isClassifiedAs())

const t5 = { a: 1, b: 2, c: 3}

console.log('t5')
console.log(theTriangle(t5).isEquilateral())
console.log(theTriangle(t5).isIsosceles())
console.log(theTriangle(t5).isScalene())
console.log(theTriangle(t5).isClassifiedAs())