// Função construtora
function Car(maximumSpeed = 200, acceleration = 5) {    
    
    // Atributo privado
    let currentSpeed = 0

    // Método público
    this.speedUp = () => {
        if(currentSpeed + acceleration <= maximumSpeed) {
            currentSpeed += acceleration
        } else {
            currentSpeed = maximumSpeed
        }
    }

    // Método público
    this.getCurrentSpeed = () => currentSpeed
}

const golf = new Car
golf.speedUp()
golf.speedUp()
console.log(golf.getCurrentSpeed())

const porsche = new Car(300, 20)
porsche.speedUp()
porsche.speedUp()
console.log(porsche.getCurrentSpeed())
