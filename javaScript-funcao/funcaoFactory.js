// Função factory é uma função que retorna um objeto. Ao retornar um objeto,
// a função factory, quando chamada, estará sempre criando uma nova instância.
function createProduct(name, price) {
    return {
        name,
        price
    }
}

const p1 = createProduct('Caneta', 1.00)
console.log(p1)