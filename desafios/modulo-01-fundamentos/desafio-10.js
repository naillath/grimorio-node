/* 🧩 Desafio 10 — Status do Personagem

Crie um objeto com os dados do heroi com:

- nome
- vida
- mana
- nivel

Mostre: 
- vida e mana
- se está vivo (vida > 0) */

const heroi = {
    name: 'Naillath',
    hp: 150,
    mana: 50,
    level: 3
};

console.log(`O herói atualmente está com ${heroi.hp} pontos de vida e ${heroi.mana} pontos de mana`)
console.log(`A saúde do herói, está ok? ${heroi.hp > 0}`)