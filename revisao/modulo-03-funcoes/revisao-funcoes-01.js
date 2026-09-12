// Funções

// function nomeDaFuncao() {};

function greet(name) {
    console.log(`Seja bem vindo de volta, ${name}!`);
}

greet("Lucas");


function sum(a, b) {
    return a + b;
}

console.log(sum(7, 3));
const result = sum(7, 3);
console.log(result);


const sub = (a, b) => {
    return a - b;
}

console.log(sub(7, 3));


function factorial(number) {
    let result = 1;

    for(let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));
console.log(factorial(7));