//  Desestruturação - é uma expressão do JavaScript que possibilita extrair dados de arrays ou objetos e atribuí-los a variáveis de forma mais concisa e legível.

function main() {
    const person = {
        name: "Naillath",
        age: 30,
        isProgrammer: true
    }

    const { name, age, isProgrammer } = person; // A desestruturação de objetos é feita utilizando chaves {} e as variáveis são atribuídas com base nos nomes das propriedades do objeto. No exemplo acima, as variáveis name, age e isProgrammer receberão os valores correspondentes das propriedades do objeto person.
    console.log(name, age, isProgrammer);
}

main();