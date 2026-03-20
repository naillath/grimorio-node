// Estrutura Condicional if/else - Define um bloco de código a ser executado se uma condição for verdadeira, e outro bloco de código a ser executado se a condição for falsa.

// A estrutura condicional if - Vai retornar um booleano que se for "true", vai ser executado o código no bloco de código dela

// if (expressão) {}

let temperature = 25;

if (temperature >= 30) { // Só vai retornar true, se a temperatura for maior ou igual a 30
    console.log("Está muito quente lá fora!");
} else { // Já o else, retorna sempre que if for false
    console.log("A temperatura está agradável.");
};

let grade = 10;

if (grade >= 9) {
    console.log("Aluno APROVADO acima da média!");
} else if (grade >= 7) { // Gera uma segunda condição, pode usado quantas vezes forem necessárias
    console.log("Aluno APROVADO na média!");
} else {
    console.log("Aluno REPROVADO!");
};