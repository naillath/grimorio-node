// 10. 🧭 Sistema de Decisão (Caminhos)

// O herói escolhe caminhos:

// Floresta
// Caverna
// Castelo

// Cada escolha leva a:

// 3 Eventos diferentes (batalha, loot, armadilha)

// Use:

// switch para decisões
// if para consequências

function mostrarCaminho() {
    const caminhos = ["[1] - Floresta 🌲", "[2] - Caverna 🕳️", "[3] - Castelo 🏰"]
    for (const caminho of caminhos) {
        console.log(caminho);
    }
}

function escolherCaminho(caminho) {
    switch (caminho) {
        case 1: {
            console.log("\nVocê escolheu o caminho da Floresta 🌲")
            console.log("\nO caminho é coberto por árvores densas, sons misteriosos ecoam entre as folhas e algo parece observar cada passo do herói.");
            break;
        }
        case 2: {
            console.log("\nVocê escolheu o caminho da Caverna 🕳️")
            console.log("\nA escuridão domina o ambiente, o ar é frio e pesado, e ecos distantes revelam que o herói não está sozinho ali dentro.");
            break;
        }
        case 3: {
            console.log("\nVocê escolheu o caminho do Castelo 🏰")
            console.log("\nRuínas antigas guardam segredos esquecidos, corredores silenciosos e uma sensação de que grandes riquezas — ou perigos — estão à espreita.");
            break;
        }
        default: {
            console.log("\nO herói hesita, perdido entre escolhas, sem saber qual direção seguir ou o que o aguarda adiante.");
        }
    }
    return caminho;
}

function explorarCaminho(escolha) {
    const roll = Math.floor(Math.random() * 3);

    if (escolha === 1) {
        if (roll === 0) {
            console.log("\n⚔️  Um lobo feroz salta entre as árvores e avança direto no herói, com presas à mostra e olhos famintos.")
        } else if (roll === 1) {
            console.log("\n💰  Entre raízes e folhas caídas, o herói encontra um baú antigo coberto de musgo, guardando itens valiosos esquecidos.")
        } else if (roll === 2) {
            console.log("\n⚠️  Ao dar mais um passo, o chão cede e uma armadilha de cipós prende o herói, erguendo-o no ar inesperadamente.")
        }
    } else if (escolha === 2) {
        if (roll === 0) {
            console.log("\n⚔️  Das sombras da caverna, um orc surge rugindo e parte para o ataque com sua arma pesada.")
        } else if (roll === 1) {
            console.log("\n💰  Refletindo à luz fraca, cristais raros brilham nas paredes — o herói encontra riquezas escondidas no interior da caverna.")
        } else if (roll === 2) {
            console.log("\n⚠️  O herói pisa em falso e ativa um mecanismo antigo, fazendo pedras desabarem do teto ao seu redor.")
        }
    } else if (escolha === 3) {
        if (roll === 0) {
            console.log("\n⚔️  Um cavaleiro espectral aparece no corredor e avança silenciosamente, empunhando uma espada amaldiçoada.")
        } else if (roll === 1) {
            console.log("\n💰  Em uma sala secreta, o herói descobre um tesouro real esquecido, repleto de ouro e artefatos antigos.")
        } else if (roll === 2) {
            console.log("\n⚠️  Ao tocar em um objeto aparentemente valioso, o herói ativa uma armadilha e flechas são disparadas das paredes.")
        }
    } else {
        console.log("\n💀  Tomado pela indecisão, o herói segue por um caminho incerto… mas sua escolha errada cobra o preço. O chão some sob seus pés e, envolto pelo desespero, ele percebe tarde demais que caiu em uma armadilha inevitável.")
    }

}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

mostrarCaminho();
rl.question("\nEscolha o seu caminho com sabedoria: ", answer => {
    const escolha = Number(answer);

    if (!answer.trim() || Number.isNaN(escolha)) {
        console.log("Informe uma rota de caminho válida!")
    } else {
        escolherCaminho(escolha);
        explorarCaminho(escolha);
    }
    rl.close()
})
