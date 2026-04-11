// 5. 💰 Sistema de Recompensa

// Crie uma função que recebe:

// nome do monstro
// dificuldade (1 a 3)

// A função deve calcular a quantidade de moedas recebidas com base na dificuldade.

// Depois, transforme essa função em arrow function.

// 📌 Objetivo:

// Trabalhar com regras e multiplicadores
// Reforçar arrow functions

function calculateCoindGained(monster, difficulty) {
    let coins = 5;
    let totalCoins = coins * difficulty;
    if (
        !monster || 
        typeof difficulty !== "number" ||
        typeof monster !== "string"
    ) {
        return `ERRO! Informações faltando ou incorretas!`
    } else if (difficulty === 1) {
        return `Após derrotar o ${monster}, o herói foi recompensado com um total de ${totalCoins} moedas.`
    } else if (difficulty === 2) {
        return `Após derrotar o ${monster}, o herói foi recompensado com um total de ${totalCoins} moedas.`
    } else if (difficulty === 3) {
        return `Após derrotar o ${monster}, o herói foi recompensado com um total de ${totalCoins} moedas.`
    } else if (difficulty < 1 || difficulty > 3) {
        return `Nível de dificuldade não reconhecido dentro dos parâmetros da guilda!`
    }
}

// console.log(calculateCoinsGained());
// console.log(calculateCoinsGained("Goblin"));
// console.log(calculateCoinsGained("Goblin", "f"));
// console.log(calculateCoinsGained(0, 1));
// console.log(calculateCoinsGained("Goblin", 0));
// console.log(calculateCoinsGained("Goblin", 4));
// console.log(calculateCoinsGained("Goblin", 1));
// console.log(calculateCoinsGained("Orc", 2));
// console.log(calculateCoinsGained("Orc Guerreiro", 3));
// console.log(calculateCoinsGained("Goblin", -1));


// Refatoração em arrow function

const coinsGained = (monster, difficulty) => {
    let baseCoins = 5;
    let totalCoins = baseCoins * difficulty;

    if (
        typeof monster !== "string" ||
        monster.trim() === "" ||
        typeof difficulty !== "number"
    ) {
        return "Erro! Informações faltando ou incorretas!"
    }
    
    if (difficulty < 1 || difficulty > 3) {
        return "Nível de dificuldade não reconhecido dentro dos parâmetros da guilda!"
    }
   
    return `Após derrotar o ${monster}, o herói foi recompensado com um total de ${totalCoins} moedas.`
    
}

console.log(coinsGained());
console.log(coinsGained("Goblin"));
console.log(coinsGained("Goblin", "f"));
console.log(coinsGained(0, 1));
console.log(coinsGained("Goblin", 0));
console.log(coinsGained("Goblin", 4));
console.log(coinsGained("Goblin", 1));
console.log(coinsGained("Orc", 2));
console.log(coinsGained("Orc Guerreiro", 3));
console.log(coinsGained("Goblin", -1));