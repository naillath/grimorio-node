console.log(`
=== Nível de Performance ===

[1] Ótima
[2] Muito boa
[3] Boa
[4] Regular
[5] Não avaliado
`); // Aqui segue o padão visual, fácil de ver todos os níveis de performance, por mais que na verdade.. sejam meio inútil mostrar já que o usuário não vai selecionar.. oor mais que sirva só pra ter uma consulta rapida

const performance = ["Ótima", "Muito boa", "Boa", "Regular", "Não avaliada"] // OK, aqui segue melhor de ver os niveis em um array
const performanceLevel = 4; // Aqui é pra selecionar o nivel da performance, pra não ter que ficar escrevendo o nome todo acima
const baseSalary = 1621; // Salário base.. ok
let bonusPercentage = 0; // aqui que gera a necessidade de cotrole de fluxo, de if e else.. pois dependendo do nivel de performance, o nivel da porcentagem varia

if (performanceLevel === 1) bonusPercentage = 0.2; // aqui é gerado.. e como é só a comparação com resposta rápida não é necessário o uso de {}
else if (performanceLevel === 2) bonusPercentage = 0.15;
else if (performanceLevel === 3) bonusPercentage = 0.1;
else if (performanceLevel === 4) bonusPercentage = 0.05;

if (performanceLevel >= 1 && performanceLevel <= 4) {  // Aqui é feito os niveis de validaçãoes, se forem entre 1 e 4, entre no if e dai é calculado valor do bonus e o novo salario com bonus
    const bonus = baseSalary * bonusPercentage;
    const newSalary = baseSalary + bonus;

    console.log(`Sua performance foi: ${performance[performanceLevel - 1]}. Recebeu um bônus de ${bonus.toFixed(2)} reais, salário final com bônus ${newSalary.toFixed(2)} reais.`)
} else {
    console.log(`Sua performance foi: ${performance[4]}. Não teve bônus, melhore sua performance!`); // aqui retorna o ultimo level ou qualquer outro numero que não tenha sido encaixado no filtro acima
}