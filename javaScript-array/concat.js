const parents = ['Douglas', 'Diana']
const sons = ['Bruno', 'Bernardo']
const daughters = ['Ana', 'Amanda']
const grandchildren = ['Carlos', 'Cristina']

const children = sons.concat(daughters)
const family = parents.concat(children).concat(grandchildren)
console.log(family)
