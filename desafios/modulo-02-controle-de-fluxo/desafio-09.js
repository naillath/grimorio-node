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
let monsterHp = 100;
let monsterBaseAttack = 18;

// Define qual vai ser o tipo de ataque Critico/Normal/Miss

function rollAttack(damage) {
    const roll = Math.floor(Math.random() * 5);

    if (roll === 4) return damage + parseInt(damage * 0.25);
    else if (roll === 0 ) return 0;
    else return damage
}

// Log de Batalha

function executeAttack(attacker, defender, baseDamage, finalDamage) {

    if (finalDamage > baseDamage) {
        console.log(`${attacker} desfere um golpe devastador! CRÍTICO! O ${defender} sofre ${finalDamage} de dano!`);
    } else if (finalDamage === baseDamage) {
        console.log(`${attacker} avança contra o ${defender} e acerta um golpe causando ${baseDamage} de dano.`);
    } else {
        console.log(`${attacker} erra o ataque! ${defender} desvia no último segundo.`);
    }
};

while (heroHp > 0 && monsterHp > 0) {
    console.log(`${heroName} HP: ${heroHp} | ${monsterName} HP: ${monsterHp}`);
    const heroAttack = rollAttack(heroBaseAttack);
    const monsterAttack = rollAttack(monsterBaseAttack);
    const heroLog = executeAttack(heroName, monsterName, heroBaseAttack, heroAttack);
    monsterHp -= heroAttack;
    const monsterLog = executeAttack(monsterName, heroName, monsterBaseAttack, monsterAttack);
    heroHp -= monsterAttack;
    console.log();

    if (heroHp <= 0) {
        console.log(`${heroName} cambaleia... seus joelhos cedem... e seu corpo tomba ao chão. O guerreiro foi derrotado, sua jornada chega ao fim.`);
    } else if (monsterHp <= 0) {
        console.log(`O ${monsterName} solta um último rugido... seu corpo desaba pesadamente no chão. O monstro foi derrotado. Diante de ${heroName}, resta apenas um corpo sem vida.`);
    }
};
