// 3. ⚔️ Ataque ao Monstro

// Simule um ataque simples:

// Herói tem ataque fixo
// Monstro tem vida

// Use if/else para:

// Verificar se o ataque derrotou o monstro
// Caso contrário, mostrar quanta vida sobrou


const ataqueHeroi = 50;
let monstroHp = 50;

if (ataqueHeroi >= monstroHp) {
    console.log(`Herói infligiu um forte ataque de ${ataqueHeroi} dano no monstro o levando a morte!`)
} else {
    console.log(`Herói só conseguiu tirar ${ataqueHeroi} de dano do monstro, ele ainda tem ${monstroHp - ataqueHeroi} pontos de vida.`)
}