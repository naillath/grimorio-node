// 4. 🛡️ Sistema de Defesa

// Crie uma função que recebe:

// dano recebido
// defesa do herói

// A função deve calcular o dano final e exibir o resultado.

// 📌 Regras:

// Se defesa for maior que dano → dano final = 0
// Caso contrário → dano final = dano - defesa

// 📌 Objetivo:

// Lógica condicional dentro de funções

function damageSuffered(damage, defense) {

    if (
        typeof damage !== "number" || 
        typeof defense !== "number" ||
        damage < 0 ||
        defense < 0
    ) {
        return "Ataque inválido";
    } else if (defense >= damage) {
        return `O ataque foi completamente bloqueado!`;
    } else {
        const finalDamage = damage - defense;
        return `Após a investida do inimigo o herói sofre ${finalDamage} de dano.`;
    }
}

console.log(damageSuffered());
console.log(damageSuffered("f", 12));
console.log(damageSuffered(25, "f"));
console.log(damageSuffered(25, 12));
console.log(damageSuffered(5, 12));
console.log(damageSuffered(0, 12));
console.log(damageSuffered(0, -12));
console.log(damageSuffered(-20, 12));
console.log(damageSuffered(20, 12));
