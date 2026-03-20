console.log(`=== Nível de Performance ===\n\n[1] Ótima\n[2] Muito boa\n[3] Boa\n[4] Regular\n[5] Não avaliada\n`);

function calculatePerformanceBonus(performanceLevel) { // Calcula o bonus de performance
    const performance = ["Ótima", "Muito boa", "Boa", "Regular", "Não avaliada"] 
    const bonusTable = [0.2, 0.15, 0.1, 0.05, 0]; 
    const baseSalary = 1621; 

    if (performanceLevel >= 1 && performanceLevel <= 5) {
        const bonus = baseSalary * bonusTable[performanceLevel - 1];
        const newSalary = baseSalary + bonus;

        console.log(`Sua performance foi: ${performance[performanceLevel -1]}. Recebeu um bônus de ${bonus.toFixed(2)} reais, salário final de ${newSalary.toFixed(2)} reais.`)
    } else {
        console.log("Nível de performance Inválido.");
    }
};  

function getUserChoice() { // Seleciona o nível de performance do funcionário

    const readline = require('readline');

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question("Selecione uma opção: ", answer => {
        const numberOption = Number(answer);

        if (!answer.trim() || Number.isNaN(numberOption)) {
            console.log("Valor inválido! Digite um número válido");
            return rl.close();
        } 

        calculatePerformanceBonus(numberOption);

        rl.close();
    });
}; 

getUserChoice();