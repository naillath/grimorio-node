// 2. ⚔️ Ataque Simples

// Crie uma função que recebe:

// nome do herói
// dano causado

// A função deve exibir uma mensagem de ataque.

// Depois, refaça essa função usando arrow function.

// 📌 Objetivo:

// Praticar parâmetros
// Converter função tradicional → arrow function

function damageHero(name, damage) {
    return `${name} avança contra o inimigo e desfere um golpe causando ${damage} de dano.`;
}

console.log(damageHero("Naillath", 25));

const damage = (name, damage) => {
    return `${name} avança contra o inimigo e desfere um golpe causando ${damage} de dano.`;
};

// const damage = (name, damage) => return `${name} avança contra o inimigo e desfere um golpe causando ${damage} de dano.`; // modelo mais curto de arrow function

console.log(damage("Naillath", 25));