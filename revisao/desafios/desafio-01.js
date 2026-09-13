// Crie uma função chamada saudacao que receba o nome de uma pessoa e retorne uma mensagem:

function saudacao(name) {
    return `Olá, ${name.charAt(0).toUpperCase() + name.slice(1)}! Seja bem-vindo(a) à Guilda!`;
}

console.log(saudacao("lucas"));
console.log(saudacao("karol"));
console.log(saudacao("kevin"));
console.log(saudacao("oliver"));