// Arrays - Estrutura de dados que armazena uma coleção de elementos, onde cada elemento é identificado por um índice, que começam em 0. Os arrays são usados para armazenar múltiplos valores em uma única variável, facilitando a manipulação e organização dos dados.

// Criando um array

const fruits = ["Maçã", "Banana", "Laranja"];

// Acessando elementos do arrays, vai colocar o nome do array e o indice

fruits[0]; // Maçã

console.log(fruits[0]); // Maçã

const secondFruit = fruits[1]; // pode ta reatribuindo um elemento de um arrays a uma nova variavel
console.log(secondFruit); // Banana

// Verificando o tamanho do arrays/quantidade de elementos

console.log(fruits.length); 

fruits[3] = "Kiwi"; // pode atribuir itens, dessa forma, por mais que não seja a mais recomendada

console.log(fruits);

fruits[5] = "Abacate";

console.log(fruits);