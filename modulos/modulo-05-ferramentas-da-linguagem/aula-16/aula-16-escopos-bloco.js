// Escopos de bloco: Variáveis declaradas com let ou const dentro de um bloco de código (como if, for, while) têm escopo de bloco. Elas só podem ser acessadas dentro desse bloco específico.

if (true) { // As variáveis só existem dentro desse bloco de código
    const myName = "Naillath";
    var myAge = 30;
    console.log(myName);
    console.log(myAge);
}

// console.log(myName); // Não consegue acessar a variável myName, pois ela só existe dentro do bloco de código do if

console.log(myAge); // Conseguimos acessar a variável myAge, pois ela foi declarada com var, que tem escopo global, ou seja, ela existe em todo o código, mesmo fora do bloco de código do if, o que pode causar problemas, pois podemos acidentalmente sobrescrever a variável myAge em outro lugar do código. Por isso, é recomendado usar let ou const para declarar variáveis.

for (let i = 0; i < 3; i++) {
    let name = "Naillath";
    console.log(name)
}

let counter = 1
while(counter < 3) {
    console.log(counter)
    counter ++;
}