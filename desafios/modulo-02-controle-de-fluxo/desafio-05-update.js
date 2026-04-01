// 5. 👾 Batalha por Turnos (loop while)

// Simule uma batalha:

// Herói e monstro possuem vida
// Cada rodada ambos atacam

// Use while para:

// Continuar a batalha até um dos dois morrer
// Mostrar o status a cada turno

let heroiHp = 100;
let monstroHp = 50;

const ataqueHeroi = 15;
const ataqueMonstro = 10;


while (heroiHp > 0 && monstroHp > 0) {
    console.log(`Herói HP: ${heroiHp} | Monstro HP: ${monstroHp}`);
    console.log(`Herói ataca monstro tirando ${ataqueHeroi} pontos de vida, o monstro contra-ataca acertando um dano que retira ${ataqueMonstro} pontos de vida do herói.`);
    heroiHp -= ataqueMonstro;
    monstroHp -= ataqueHeroi;

    if (heroiHp <= 0) { 
        console.log("\nO herói perdeu todos os seus pontos de vida, ele está morto!"); // heroi morre
    } else if (monstroHp <= 0) {
        console.log("\nO monstro perdeu todos os seus pontos de vida, ele está morto!"); // monstro morre
    }
}




// 🧪 Teste de verdade (nível dev)

// Faz isso depois:

// 👉 pega o desafio 5 e tenta:

// adicionar crítico (chance de 20%)
// adicionar erro de ataque (miss)
// deixar dano aleatório

// Se você conseguir evoluir ele sozinho →
// 💀 você já tá entrando no nível do desafio 9 sem perceber