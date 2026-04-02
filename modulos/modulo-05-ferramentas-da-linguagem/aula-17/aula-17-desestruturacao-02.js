// Desestruturação

function main() {

    const colors = ["azul", "branco", "roxo", "prata"];

    const [firstColor] = colors; // Diferente de um objeto, a desestruturação de arrays é feita utilizando colchetes [] e a ordem dos elementos é importante. No exemplo acima, a variável firstColor receberá o valor "azul", que é o primeiro elemento do array colors.

    console.log(firstColor); // Saída: "azul"

}
main(); 