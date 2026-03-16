// Esse é um exemplo simples de um programa Node.js que lê a entrada do usuário e responde com uma mensagem personalizada. Ele utiliza o módulo 'readline' para criar uma interface de leitura e escrita no console.

const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

let name;

prompt.question("Qual o seu nome? ", answer => {
    name = answer;
    prompt.close();
});

prompt.on("close", () => {
    console.log(`Olá, ${name}!`);
});

// Também é possível escrever o código de forma mais compacta, sem a necessidade de criar uma variável para armazenar o nome:

{
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Qual o seu nome? ', (name) => {
        console.log(`Olá, ${name}!`);
        rl.close();
    });

}
