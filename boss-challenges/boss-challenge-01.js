console.log("Welcome to Boss Challenge 01!");

/* 👑 Boss Challenge — O Confronto Final
🐉 Desafio: Batalha Completa

Você deve simular uma batalha entre:

Herói:
- nome
- vida
- ataque

Monstro:
- nome
- vida
- defesa 

🎯 Regras

O herói ataca:
dano = ataque - defesa
A vida do monstro diminui
Verifique:
monstro morreu? (vida <= 0)
Mostre no console:
vida restante
resultado da batalha

*/

const hero = {
    name: 'Naillath',
    hp: 20,
    attack: 15
};

const monster = {
    name: 'Goblin',
    hp: 15,
    defense: 7
};

const damage = hero.attack - monster.defense;
monster.hp -= damage;
const monsterIsDead = monster.hp <= 0

console.log(`${hero.name} ataca um ${monster.name} na floresta, causando um dano de ${damage} pontos, o deixando com ${monster.hp} pontos de vida.`)
console.log(`Será que o ${monster.name} morreu? ${monsterIsDead}`)