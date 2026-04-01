// 7. 🧠 Sistema de Nível (if + loop)

// O herói ganha XP em um loop.

// Use while para acumular XP
// Quando atingir um valor específico:
// Sobe de nível
// Reseta XP ou continua acumulando (sua escolha)

// Use if/else if para múltiplos níveis

// refaz do zero
// tenta melhorar
// organiza em função

let xpHero = 0;
let levelHero = 1;
const xpGain = 15;
let excedente = 0;

function levelUp(level) {
    while (levelHero < level) {
        xpHero += xpGain;

        console.log(`O Herói ganhou ${xpGain} pontos de xp! Sua xp atual é ${xpHero}`);
   
        if (xpHero >= 100) {
            levelHero += 1;
            excedente = xpHero - 100;
            xpHero = excedente;
         console.log(`\nO Herói subiu de nível! Seu nível atual agora é ${levelHero}\n`)
        }
          
    }
}

levelUp(4);