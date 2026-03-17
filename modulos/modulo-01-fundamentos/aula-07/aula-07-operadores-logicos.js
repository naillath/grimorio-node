// Operadores Lógicos - Assim como os operadores de comparação retornam true(verdadeiro) ou false(falso)

// && AND (E) - Retorna true apenas se todas as informações forem true
// || OR (OU) - Retorna true se pelo menos uma das informações forem true
// ! NOT (NÃO) - Nega o valor, se for true vira falsa e vice-versa


console.log("Operador && AND (E)"); 

console.table([
    ["🍰", "&&", "🍕", true],
    ["❌", "&&", "🍕", false],
    ["🍰", "&&", "❌", false],
    ["❌", "&&", "❌", false]
]);

const cake = true;
const pizza = true;
const x = false;

console.log(cake && pizza); // Saída: true
console.log(x && pizza); // Saída: false
console.log(cake && x); // Saída: false
console.log(x && x); // Saída: false

console.log("Operador || OR (OU)");

console.table([
    ["🍰", "||", "🍕", true],
    ["❌", "||", "🍕", true],
    ["🍰", "||", "❌", true],
    ["❌", "||", "❌", false]
]);

console.log(cake || pizza); // Saída: true
console.log(x || pizza); // Saída: true
console.log(cake || x); // Saída: true
console.log(x || x); // Saída: false

console.log("Operador ! NOT (NÃO)");

const isOpen = true;
console.log(!isOpen);

const isRaining = false;
console.log(!isRaining)
