/* 1. 🧙 Nome do Herói e Classe

Crie um sistema onde o herói escolhe uma classe:

Guerreiro
Mago
Arqueiro

Use switch para:

Definir atributos iniciais (vida e ataque)
Exibir uma mensagem personalizada baseada na classe escolhida */

const readline = require('readline');

function displayClass() {
    console.log("\n[1] - Guerreiro ⚔️");
    console.log("[2] - Mago 🔮");
    console.log("[3] - Arqueiro 🏹\n");
};

function selectClass(chosen, name) {

    switch(chosen) {
        case "1": {
            console.log(`\n${name}, você escolheu o caminho do Guerreiro ⚔️`)
            console.log("Atributos iniciais — Vida: 120 | Ataque: 15");
            console.log("Um combatente resistente, capaz de suportar grandes danos e lutar até o fim.");
            break;
        }
        case "2": {
            console.log(`\n${name}, você escolheu o caminho do Mago 🔮`)
            console.log("Atributos iniciais — Vida: 80 | Ataque: 25");
            console.log("Um conjurador poderoso, capaz de causar grande dano, mas com baixa resistência.");
            break;
        }
        case "3": {
            console.log(`\n${name}, você escolheu o caminho do Arqueiro 🏹`)
            console.log("Atributos iniciais — Vida: 100 | Ataque: 18");
            console.log("Um combatente versátil, equilibrando precisão e mobilidade em batalha.");
            break;
        }
        default : {
            console.log(`\n${name}… os deuses não reconhecem esse caminho.`)
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Diga-nos, viajante… qual é o nome que ecoará pelas lendas? ", answer => {
    const nameHero = answer;
    console.log(`\n${nameHero}... sua jornada começa agora.`);
    console.log("Diante de você, três caminhos se revelam:")
    
    displayClass();
    rl.question(`Agora, ${nameHero}... escolha sua classe e trilhe o caminho do seu destino: `, answer => {
        const numberClass = answer;

        selectClass(numberClass, nameHero);
        rl.close();
    })

});
