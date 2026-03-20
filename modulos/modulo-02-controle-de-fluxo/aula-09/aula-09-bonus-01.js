console.log(`
=== Nível de Performance ===

[1] Ótima
[2] Muito boa
[3] Boa
[4] Regular
[5] Não avalido
`);

const performance = ["Ótima", "Muito boa", "Boa", "Regular", "Não avaliada"]
const performanceLevel = 4;
const baseSalary = 1621;
let newSalary = 0;
let bonus = 0;

if (performanceLevel === 1) {
    bonus = baseSalary * 0.2;
    newSalary = baseSalary + bonus;
    console.log(`Sua performance foi: ${performance[0]}. Recebeu um bônus de ${bonus.toFixed(2)} reais, salário final com bônus ${newSalary.toFixed(2)} reais.`); // toFixed(2) formata a quantidade de casas de um número decimal após a virgula/ponto
} else if (performanceLevel === 2) {
    bonus = baseSalary * 0.15;
    newSalary = baseSalary + bonus;
    console.log(`Sua performance foi: ${performance[1]}. Recebeu um bônus de ${bonus.toFixed(2)} reais, salário final com bônus ${newSalary.toFixed(2)} reais.`); 
} else if (performanceLevel === 3) {
    bonus = baseSalary * 0.1;
    newSalary = baseSalary + bonus;
    console.log(`Sua performance foi: ${performance[2]}. Recebeu um bônus de ${bonus.toFixed(2)} reais, salário final com bônus ${newSalary.toFixed(2)} reais.`);
} else if(performanceLevel === 4) {
    bonus = baseSalary * 0.05;
    newSalary = baseSalary + bonus;
    console.log(`Sua performance foi: ${performance[3]}. Recebeu um bônus de ${bonus.toFixed(2)} reais, salário final com bônus ${newSalary.toFixed(2)} reais.`);
} else {
    console.log('Sua performance foi: Não avaliado. Não teve bônus, melhore sua performance!');
}