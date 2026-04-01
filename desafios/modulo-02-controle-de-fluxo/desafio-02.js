// 2. 🪙 Sistema de Compra Simples

// O herói possui uma quantidade de moedas.

// Existe um item com preço fixo (ex: espada)
// Use if/else para verificar se ele pode comprar
// Se puder → subtrai as moedas
// Se não → exibe mensagem de falha

let moedasHeroi = 100;
const precoEspada = 35;


if (moedasHeroi >= precoEspada) {
    console.log(`Herói compra espada por ${precoEspada} moedas e ficou com ${moedasHeroi - precoEspada} moedas.`)
} else {
    console.log("Número de moedas insuficientes.")
}