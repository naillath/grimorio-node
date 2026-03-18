/* 🧩 Desafio 04 — Sistema de Ouro

Um herói possui:
- 100 moedas
Ele compra uma espada por 35 moedas.
Calcule:
- quanto sobra
use operador de atribuição (-=) */

let heroCoins = 100;
let swordPrice = 35;

heroCoins -= swordPrice;

console.log(`Após a compra da espada por ${swordPrice} moedas, o herói ficou com ${heroCoins} moedas.`)