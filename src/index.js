const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe o número do qual deseja ver a tabuada: ", answer => {
    const number = Number(answer);

    if (!answer.trim() || Number.isNaN(number)) {
        console.log("❌ ERRO! Digite um número válido.")
    } else {
        console.log(`A tabuada de ${number} é:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${number} X ${(i < 10? "0": "") + i} = ${number * i}`)
        }
    }
    rl.close();
});