let current;
let times = 0;
const expected = 8;

while (current !== expected) {
    current = Math.floor(Math.random() * (50 + 1));
    console.log(current);
    times++;
}

// Math.floor() - arredonda para baixo
// Math.random() - gera um número aleatório entre 0 e 1
// Math.random() * (50 + 1) - gera um número aleatório entre 0 e 50 (inclusive o 50)

console.log(`Total de vezes até sair o número esperado foram: ${times}`)