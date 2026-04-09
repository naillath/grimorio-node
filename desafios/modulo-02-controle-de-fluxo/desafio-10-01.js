// 10. 🧭 Sistema de Decisão (Caminhos)

// O herói escolhe caminhos:

// Floresta
// Caverna
// Castelo

// Cada escolha leva a:

// Eventos diferentes (batalha, loot, armadilha)

// Use:

// switch para decisões
// if para consequências

let caminho = 1;

switch (caminho) {
    case 1: {
        console.log("O herói decide seguir pelo caminho da floresta.");
        break;
    }
    case 2: {
        console.log("O herói decide seguir pelo caminho da caverna.");
        break;
    }
    case 3: {
        console.log("O herói decide seguir pelo caminho do Castelo.");
        break;
    }
    default : {
        console.log("Caminho desconhecido, recalibre a rota e escolha um caminho válido!")
    }
};

if (caminho === 1) {
    console.log("Ao adentrar as matas da floresta, surge um lobo de trás de um árvore e avança na direção do herói!");
} else if (caminho === 2) {
    console.log("Depois de entrar pela caverna do Orc, a criatura sombria e com sede de sangue, aguardava pelo herói!")
} else if (caminho === 3) {
    console.log("Ao chegar ao castelo abandonado e após seguir explorando seu interior por horas, o herói encontrou um grande tesouro!");
} else {
    console.log("O herói se encontra em um momento de confusão!")
}