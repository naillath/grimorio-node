const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.question("Qual a sua idade? ", answer => {
    const age = Number(answer);

    if (!answer.trim() || Number.isNaN(age)) {
        console.log("Por favor! Informe um número válido.. KARALHOO!");
    } else if (age >= 18) {
        console.log(`Você tem ${age} anos, é maior de idade.`);
    } else {
        console.log(`Você tem ${age} anos, é menor de idade.`);
    } // Padrão encadeado

    rl.close();
});

/*
rl.question("Qual a sua idade?", answer => {
    const age = Number(answer);

    if (!answer.trim() || Number.isNaN(age)) {
        console.log("Por favor! Informe um número válido.. KARALHOO!");
        return rl.close(); // Padrão com early exit, pra quando quiser sair mais rápido
    }

    if (age >= 18) {
        console.log(`Você tem ${age} anos, é maior de idade.`);
    } else {
        console.log(`Você tem ${age} anos, é menor de idade.`)
    }

    rl.close();
});
*/