// Funções - São blocos de código reutilizáveis que realizem uma tarefa específica. Elas ajudam a organizar o código, o tornando-o mais legível e fácil de manter. As funções podem receber parâmetros, que são valores passados para a função quando ela é chamada, e podem retornar um valor como resultado.

// Exemplo de função sem retorno e sem parametro

function greet() {
    console.log("Seja bem vindo!");
};

greet(); // Chamada da função

// Exemplo de função com retorno e sem parametro

function greet2() {
    return "Seja bem vindo!";
};

let result = greet2();

console.log(result);

// Exemplo de função com parametro e sem retorno

function greet3(name) {
    console.log(`Seja bem vindo, ${name}!`);
};

greet3("Lucas");

// Exemplo de função com parametro e retorno

function greet4(name) {
    return `Seja bem vindo, ${name}!`;
};

result = greet4("Lucas");

console.log(result);