// 6. 🎒 Inventário com Decisão

// O herói encontra um item aleatório:

// Poção
// Espada
// Escudo

// Use switch para:

// Aplicar efeitos diferentes (cura, ataque, defesa)

let item = "arco";

switch(item) {
    case "poção": {
        console.log("Herói encontrou um poção de cura, que lhe concede 10 pontos de vida ao usar.");
        break;
    }
    case "espada": {
        console.log("Herói encontrou uma espada, que lhe dá um bônus no seu ataque base em 10 pontos.");
        break;
    }
    case "escudo": {
        console.log("Herói encontrou um escudo, que lhe dá um bônus na sua defesa base em 10 pontos.");
        break;
    }
    default: {
        console.log("Esse item misterioso.. deve ser levado para ser avaliado na cidade.")
    }
}