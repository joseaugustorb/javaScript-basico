// Notação literal
const object1 = {}

// Object em JS
const object2 = new Object

// Função construtora
function Product(name, price, discount) {
    this.name = name
    this.price = price
    this.discount = discount
    this.getPriceWithDiscount = () => price * (1 - discount)
}

const product1 = new Product('Arroz', 5.00, 0.1)
console.log(`Preço com desconto: ${product1.getPriceWithDiscount()}`)

// Função Factory (Padrão Factory)
function createEmployee(name, baseSalary, absense) {
    return {
        name,
        baseSalary,
        absense,
        getBaseSalary() {
            return (baseSalary / 30) * (30 - absense)
        }
    }
}

const employee1 = new createEmployee('João', 2000, 3)
console.log(`Salário base do João: ${employee1.getBaseSalary()}`)

// Object create
const son = Object.create(null)
son.name = 'Pedro'
console.log(son.name)

// função JSON (função que retorna um objeto com formato JSON)
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
