// 3. 🧪 Poção Misteriosa (IIFE)

// Crie uma IIFE que simula o uso de uma poção ao iniciar o jogo.

// Ela deve:

// Definir uma quantidade fixa de cura
// Exibir uma mensagem de recuperação de vida

// 📌 Objetivo:

// Entender execução imediata
// Criar lógica isolada

(() => {
    console.log("+10 de HP recuperado");
})();

((hpHealth) => {
    console.log(`+${hpHealth} de HP recuperado`);
})(20);

((potionHp) => {
    console.log(`+${potionHp} de HP recuperado`);
})(30);


(() => {
    const potionHp = 25;

    if (potionHp > 0) {
        console.log(`Poção usada! +${potionHp} HP recuperado.`)
    } else {
        console.log("A poção falhou...")
    }
})();

let heroHp = 45;

((heal) => {
    heroHp += heal;
    console.log(`HP atual: ${heroHp}`);
})(20);