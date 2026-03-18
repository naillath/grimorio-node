/*  🧩 Desafio 02 — Dano Simples

Um herói causa 15 de dano base.

Crie uma variável para o dano e outra para a vida de um monstro (ex: 50).

Calcule e mostre:

vida restante do monstro após o ataque */

const heroAttack = 15;
let monsterHp = 50;

monsterHp -= heroAttack

console.log(`O monstro da floresta sofreu um ataque de ${heroAttack} de dano do herói, ficando com ${monsterHp} de vida.`)