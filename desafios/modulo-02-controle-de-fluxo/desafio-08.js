// 8. 🏪 Loja com Múltiplas Escolhas

// Crie uma loja com vários itens:

// Espada
// Armadura
// Poção

// Regras:

// Use switch para escolha do item
// Use if/else para validar moedas
// Permita múltiplas compras com while

function showItems() {
    const items = ["Espada", "Escudo", "Armadura", "Poção de HP", "Poção de Mana"];
    console.log("LOJA DE ITENS DO CLEITIN\n");

    for (let i = 0; i < items.length; i++) {
        console.log(`[${i+1}] - ${items[i]}`);
    };
    console.log();
}

function selectItems(item) {

    switch(item) {
        case 1: {
            console.log("\nVocê selecionou a Espada | Preço: 35 moedas.");
            console.log("Adiciona + 10 pontos ao ataque base.\n");
            break;
        }
        case 2: {
            console.log("\nVocê selecionou o Escudo | Preço: 30 moedas.");
            console.log("Adiciona + 10 pontos a defesa base.\n");
            break;
        }
        case 3: {
            console.log("\nVocê selecionou a Armadura | Preço: 50 moedas.");
            console.log("Adiciona + 25 ponto a defesa base.\n");
            break;
        }
        case 4: {
            console.log("\nVocê selecionou a Poção de HP | Preço: 15 moedas.");
            console.log("Recupera 10 pontos de vida.\n");
            break;
        }
        case 5: {
            console.log("\nVocê selecionou a Poção de Mana | Preço: 10 moedas.");
            console.log("Recupera 10 pontos de Mana.\n");
            break;
        }
        default: {
            console.log("\nEsse item, não se encontra disponível na loja!\n");
        }
    }
}

function buyItems(item) {
    let coins = 30;
    const listPrice = [35, 30, 50, 15, 10];

    if (coins >= listPrice[item -1]) {
        coins -= listPrice[item -1];
        console.log(`Item comprado! Moedas restantes: ${coins}`);
    } else if (coins < listPrice[item -1]) {
        console.log("\nNúmero de moedas insuficientes.");
    } 
}

showItems();

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Selecione o número do item que deseja comprar: ", answer => {
    let item = Number(answer);

    if (!answer.trim() || Number.isNaN(item)) {
        console.log("Entrada inválida! Informe um número para executar a compra.")
    } else {
        buyItems(item);
        selectItems(item);
    }
    rl.close()
})



// Vou voltar para completar o desafio com while, assim que aprender promises, por hora faz apenas "uma compra"