const nickname = "Naillath Dev";

const player = {
    nickname: "Naillath",
    health: 80,
    inventory: {
        items: ["sword", "shield", "bow"],
        potions: [
            { type: "regeneration", duration: 8 },
            { type: "defense", duration: 8 }
        ]
    }
}

// const { nickname: nick } = player;

// const { inventory: {items, potions} } = player; // Apenas items e potions, estão sendo desestruturados, inventory não é desestruturado, apenas acessado

// const { inventory: {potions} } = player; // Apenas potions, estão sendo desestruturados, inventory não é desestruturado, apenas acessado

// const [firstPotion, {type, duration}] = potions; // Desestruturando o array de potions, pegando o primeiro elemento e desestruturando o segundo elemento do array de potions

const { inventory: { potions: [{ type, duration }] }} = player; // Desestruturando o array de potions, pegando o primeiro elemento e desestruturando o segundo elemento do array de potions, acessando diretamente o tipo e duração da primeira poção

// const type = player.inventory.potions[0].type; // Acessando o tipo da primeira poção sem desestruturar
// const duration = player.inventory.potions[0].duration; // Acessando a duração da primeira poção sem desestruturar


console.log(type, duration);