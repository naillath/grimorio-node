// 8. ⚔️ Sistema de Combate Modular

// Crie funções separadas para:

// atacar
// defender
// calcular vida restante

// Simule uma batalha entre herói e monstro usando essas funções.

// 📌 Regras:

// Cada ação deve ser uma função independente
// Organizar bem as chamadas

// 📌 Objetivo:

// Modularização com funções
// Organização mental




function attack(damage) {
    return damage;
}

function defend() {
    // return `${} bloqueia totalmente o ataque!`
}

function calculateReimainigLife(hp, damage, action) {
    let finalHp = hp;
    if (action === attack) {
       finalHp = hp - damage;
        return  finalHp;
    } else if (action === defend) {
        return finalHp;
    }

}

// `${attacker} desfere o ataque contra ${target}, causando ${damage} de dano!`;