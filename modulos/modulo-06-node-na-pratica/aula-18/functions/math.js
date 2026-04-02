export function sum(a, b) { // exporta direto pela função pelo module
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mut(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

// export default { sub, mut, div } // exportação padrão, só pode ter um export default por arquivo, e é importado sem chaves, diferente do export normal

export { sub, mut, div }; // exportar varias funções em um objeto pelo module

// module.exports = { sum, sub, mut, div } // metodo para exportar com commonjs

// module.exports = { // tambem poderia ta criando as funções diretamente do objeto

    // sum(a, b) {
    //     return a + b
    // }

// }