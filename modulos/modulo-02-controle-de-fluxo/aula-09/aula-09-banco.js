const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let accountBalance = 3000;
console.log(`💰 Saldo atual: ${accountBalance} reais.`);

rl.question("💵 Digite o valor da transferência: ", answer => {
    const TransferAmount = Number(answer);

    if (!answer.trim() || Number.isNaN(TransferAmount)) {
        console.log("❌ Valor inválido! Digite um número válido.");
        return rl.close(); // Padrão early exit
    }

    if (TransferAmount <= 0) {
        console.log("❌ O valor deve ser positivo!")
    } else if (TransferAmount > accountBalance) {
        console.log("❌ Saldo insuficiente.")
    } else {
        accountBalance -= TransferAmount;
        console.log(`✅ Transferência de ${TransferAmount} reais realizada.`)
        console.log(`💰 Novo saldo: ${accountBalance} reais.`)
    }

    rl.close();
});