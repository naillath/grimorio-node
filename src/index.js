// 9. ⚔️ Sistema de Combate Completo

// Agora a batalha tem mais lógica:

// Chance de crítico
// Possibilidade de errar ataque
// Dano variável

// Use:

// if/else if para condições de combate
// while para loop de batalha

// status base do heroi

const heroName = "Naillath";
let heroHp = 80;
let heroBaseAttack = 25;

// status base do monstro

const monsterName = "Orc"
let monsterHp = 50;
let monsterBaseAttack = 18;

// Define qual vai ser o tipo de ataque Critico/Normal/Miss

function rollAttack() {
    const roll = Math.floor(Math.random() * 5); // Gera um numero aleatório de 0 a 4

    if (roll === 0) return "MISS";
    else if (roll === 4) return "CRIT";
    else return "NORMAL";
}

const roll = rollAttack();

// Responsável por gerar o tipo de dano

function damageGenerator(roll, attack) {

    if (roll === "CRIT") return parseInt(attack + (attack * 0.25));
    else if (roll === "MISS") return 0;
    else return attack;
}

// Log de Batalha

function attackLog(atacker, target, damage) {

    let roll = rollAttack();
    let damage = damageGenerator(roll, damage)

    if (roll === "CRIT") {
        console.log(`${atacker} desfere um golpe devastador! CRÍTICO! O ${target} sofre ${damage} de dano!`);
    } else if (roll === "MISS") {
        console.log(`${atacker} erra o ataque! O ${target} desvia no último segundo.`);
    } else {
        console.log(`${atacker} avança contra o ${target} e acerta um golpe causando ${damage} de dano.`);
    }
}

while (heroHp > 0 && monsterHp > 0) {
    console.log(`${heroName} HP: ${heroHp} | ${monsterName} HP: ${monsterHp}`);
    const heroLog = attackLog(heroName, monsterName, heroBaseAttack);
    monsterHp -= heroAttack;
    const monsterLog = attackLog(monsterName, heroName, monsterBaseAttack);
    heroHp -= monsterAttack;
};
