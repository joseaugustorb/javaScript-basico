const names = ['Roberta', 'Alice', 'Diogo']

const addSurname = name => `${name} Aguiar`
const showFullName = fullName => console.log(fullName)

const fullNames = names.map(addSurname)
fullNames.forEach(showFullName)