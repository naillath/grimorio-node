// Escopo léxico - Ele vai procurar a variável no escopo onde ela foi criada, e se não encontrar, ele vai procurar no escopo mais externo, e assim por diante, até chegar no escopo global se necessário. O escopo léxico é definido no momento em que o código é escrito, e não no momento em que ele é executado.

const myAge = 30; // Variável global, pois foi declarada fora de qualquer função, e pode ser acessada em qualquer parte do código.
const myName = "Apheru"; // Variável global, pois foi declarada fora de qualquer função, e pode ser acessada em qualquer parte do código.

function main() {
    const myName = "Naillath"; // Variável local, pois foi declarada dentro da função main, e só pode ser acessada dentro da função main. Ela tem o mesmo nome da variável global myName, mas ela é uma variável diferente, pois ela está em um escopo diferente. Ela é uma variável local, pois foi declarada dentro da função main, e só pode ser acessada dentro da função main.
    console.log(myAge); // 30, pois a variável myAge é global, e pode ser acessada dentro da função main.

    function secondary() {
        let number = 10;
        console.log(myName); // Nesse caso, o console.log vai imprimir "Naillath", pois a variável myName que está dentro da função main tem precedência sobre a variável global myName, pois ela está em um escopo mais próximo. O JavaScript vai procurar a variável myName primeiro no escopo da função secondary, e como não encontra, ele vai procurar no escopo da função main, e encontra a variável myName com o valor "Naillath", e é isso que ele vai imprimir. Se a variável myName não estivesse declarada dentro da função main, ele iria procurar no escopo global e imprimir "Apheru".
        console.log(myAge); // 30, pois a variável myAge é global, e pode ser acessada também dentro da função secondary.
    }
    secondary();

    // console.log(number); // ReferenceError: number is not defined, pois foi criada dentro da função secondary, ou seja ela só existe dentro do escopo da função secondary, e não pode ser acessada fora dela. Somente dentro da função secondary.

}
main(); // Naillath