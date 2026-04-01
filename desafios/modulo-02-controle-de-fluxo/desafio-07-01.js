// 7. 🧠 Sistema de Nível (if + loop)

// O herói ganha XP em um loop.

// Use while para acumular XP
// Quando atingir um valor específico:
// Sobe de nível
// Reseta XP ou continua acumulando (sua escolha)

// Use if/else if para múltiplos níveis

let xpHero = 0;
let levelHero = 1
const xpGain = 15;

while (levelHero < 4) {
    xpHero += xpGain;
    console.log(`Herói ganhou ${xpGain} pontos de XP, xp atual ${xpHero}`)
    let excedente = 0;

    if (xpHero >= 100) {
        levelHero += 1;
        excedente = xpHero - 100;
        xpHero = excedente;
        console.log(`\nHerói subiu de nível! Nível atual: ${levelHero}`)
    } 
}