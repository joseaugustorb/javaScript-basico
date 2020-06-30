// Cadeia de protótipos

// Exemplo 1
const grandfather = { attribute1: '1' }
const father = { __proto__: grandfather, attribute2: '2', attribute3: '3' }
const son = { __proto__: father, attribute3: 'C' }
console.log(son.attribute1, son.attribute2, son.attribute3)

// Exemplo 2
const car = {
    currentSpeed: 0,
    maxSpeed: 200,
    speedUp(delta) {
        if(this.currentSpeed + delta <= this.maxSpeed) {
            this.currentSpeed += delta
        } else {
            this.currentSpeed = this.maxSpeed
        }
    },
    status() {
        return `${this.currentSpeed}Km/h de ${this.maxSpeed}Km/h`
    }
}

const lamborghini = {
    currentSpeed: 150,
    model: 'Huracan',
    maxSpeed: 350,
    status() {
        return `${this.model}: ${super.status()}`
    }
}

// Lamborghini tem car como protótipo
Object.setPrototypeOf(lamborghini, car)
// console.log(Object.assign(car, lamborghini))
lamborghini.speedUp(150)
console.log(lamborghini.status())

const bmw = {
    currentSpeed: 120,
    model: 'M3',
    maxSpeed: 250,
    status() {
        return `${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(bmw, car)
// console.log(Object.assign(car, bmw))
bmw.speedUp(140)
console.log(bmw.status())

const mercedez = {
    currentSpeed: 100,
    model: 'CLA200',
    maxSpeed: 230,
    status() {
        return `${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(mercedez, car)
// console.log(Object.assign(car, mercedez))
mercedez.speedUp(100)
console.log(mercedez.status())

// console.log(__proto__)
// console.log(Object.prototype)
// console.log(bmw.__proto__ === Object.prototype)
// console.log(mercedez.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__)

