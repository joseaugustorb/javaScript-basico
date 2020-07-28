const applyBhaskaraFormula = (a, b, c) => {
    const delta = Math.pow(b, 2) - 4 * a * c
    if (delta >= 0) {
        const x1 = (- b + Math.sqrt(delta)) / 2 * a
        const x2 = (- b - Math.sqrt(delta)) / 2 * a
        const result = []
        result.push(x1, x2)
        return result
    } else {
        return 'Delta é negativo'
    }
}

console.log(applyBhaskaraFormula(1, -1, -6)) // delta > 0 (x1 != x2)
console.log(applyBhaskaraFormula(1, -10, 25)) // delta = 0 (x1 = x2)
console.log(applyBhaskaraFormula(1, 1, 2)) // delta < 0 (xɇR)