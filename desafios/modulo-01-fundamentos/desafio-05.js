/* 🧩 Desafio 05 — Dano Crítico

Um ataque causa:
dano base = 20
crítico = dobra o dano
Crie uma variável booleana:
const critico = true
Se for crítico, o dano deve ser multiplicado. */

let heroAttack = 20;
const critico = true;

const finalAttack = critico ? (heroAttack * 2) : heroAttack;

console.log(`Ataque final: ${finalAttack}`)