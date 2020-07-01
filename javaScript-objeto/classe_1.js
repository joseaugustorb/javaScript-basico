class Account {

    constructor(name = 'Generic', balance = 0) {
        this.name = name,
        this.balance = balance
        this.debits = []
    }

    pay(name = 'Generic', value = 0) {
        this.balance -= value
        this.debits.push([name, value])
    }

    allDebits() {
        return this.debits
    }

    status() {
        return `Nome: ${this.name}\nSaldo atual: R$${this.balance}`
    }

}

const account1 = new Account('João', 10000)
account1.pay('Internet', 100)
account1.pay('Tax', 300)
console.log(account1.allDebits())
console.log(account1.status())

console.log()

const account2 = new Account('Ana', 15000)
account2.pay('Car', 500)
account2.pay('Energy', 120)
console.log(account2.allDebits())
console.log(account2.status())
