// 1. 🧙‍♂️ Saudação do Herói

// Crie uma função sem parâmetros que exibe uma mensagem padrão:

// “Um novo herói entrou no reino!”

// Depois, crie outra função com parâmetro que recebe o nome do herói e exibe:

// “O herói [nome] chegou para a batalha!”

// 📌 Objetivo:

// Diferenciar função com e sem parâmetro
// Entender chamada de função

function summonHero() {
    console.log("Um novo herói entrou no reino!");
}

summonHero();

function heroEntersBattle(name) {
    console.log(`O herói ${name} chegou para a batalha!`);
}

heroEntersBattle("Naillath");