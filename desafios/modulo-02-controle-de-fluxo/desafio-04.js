// 4. 🔁 Treinamento do Herói (loop for)

// O herói treina por 5 dias.

// Use for
// A cada dia ele ganha +2 de ataque
// Exiba a evolução dia a dia]

const totalDias = 5;
let ataqueHeroi = 15;

for (let i = 1; i <= totalDias; i++) {
    ataqueHeroi += 2
    console.log(`Ataque após ${i}º dia de treino ${ataqueHeroi}`)
};