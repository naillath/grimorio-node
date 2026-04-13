// 7. 🧠 Escolha do Caminho

// Crie uma função que recebe:

// uma escolha do jogador (“esquerda” ou “direita”)

// Cada escolha leva a um resultado diferente (ex: encontrar inimigo ou tesouro).

// 📌 Objetivo:

// Simular decisão de jogo
// Trabalhar lógica condicional mais narrativa

function mostrarCaminhos() {
    const caminhos = ["[1] - Esquerda", "[2] - Direita"];

    for (const caminho of caminhos) {
        console.log(caminho);
    }
}

function caminhoEscolhido(caminho) {
    if (typeof caminho !== "string" || caminho.trim() === "") {
        return "\nCaminho desconhecido até mesmo pelos deuses..."
    }

    caminho = caminho.toLowerCase();

    if (caminho !== "esquerda" && caminho !== "direita") {
        return "\nCaminho inválido, jovem aventureiro!"
    }

    if (caminho === "esquerda") {
        return "\nVocê encontrou uma tropa de Orc Guerreiros!";
    } else {
        return "\nVocê encontrou um tesouro!";
    }
}

mostrarCaminhos();
console.log(caminhoEscolhido("cima"));
console.log(caminhoEscolhido());
console.log(caminhoEscolhido(123));
console.log(caminhoEscolhido("cima"));
console.log(caminhoEscolhido("esquerda"));
console.log(caminhoEscolhido("direita"));
