// do while - diferente do while, o do while executa o bloco de código pelo menos uma vez, e depois verifica a condição.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query) {
    return new Promise((resolve) => {
        rl.question(query, resolve)
    })
}

async function main() {
    let number;

    do {
        const answer = await question("Digite um número qualquer: ");
        number = Number(answer);

        console.log("❌ O que você digitou é inválido!")

    } while(Number.isNaN(number)); 
    rl.close();

    console.log(`Você digitou o número: ${number}`)
}

main();