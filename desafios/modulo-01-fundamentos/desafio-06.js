/* 🧩 Desafio 06 — Batalha Simples

Um herói ataca um monstro.
- vida do monstro: 40
- dano do herói: 12
Calcule:
quantos ataques são necessários para derrotar o monstro */

let monsterHp = 40;
const heroAttack = 12;

let attacksCount = Math.ceil(monsterHp / heroAttack)

console.log(`O herói precisou desferir ${attacksCount} golpes, para acabar com o monstro.`)