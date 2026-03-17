// Operadores de Comparação - Usados para comparar valores

// >    (Maior que)   
// >=   (Maior ou igual que) 
// <    (Menor que)
// <=   (Menor ou igual que)

// ==   (Igual a) Compara somente se o valor é igual
// !=   (Diferente de) Compara somente se o valor é diferente
// ===  (Estritamente igual a) Compara se o valor e o tipo são iguais
// !==  (Estritamente diferente a) Compara se o valor e o tipo são diferentes


console.log(10 > 10); // Saída: false
console.log(10 >= 10); // Saída: true
console.log(10 < 10); // Saída: false
console.log(10 <= 10); // Saída: true

console.log('10' == 10); // Saída: true
console.log('10' === 10); // Saída: false
console.log(10 === 10); // Saída: true

console.log('10' != 10); // Saída: false
console.log('10' !== 10); // Saída: true
console.log(10 !== 10); // Saída: false

// Além de números também podemos comparar strings

const myName = 'Naillath';

console.log('Naillath' === myName); // Saída: true
console.log('naillath' === myName); // Saída: false

console.log('Naillath' !== myName); // Saída: false
console.log('naillath' !== myName); // Saída: true