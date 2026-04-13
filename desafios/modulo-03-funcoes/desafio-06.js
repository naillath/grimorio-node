// 6. 🎒 Inventário do Herói

// Crie uma função que:

// recebe um item
// adiciona esse item a um inventário (array)

// Crie também outra função que:

// lista todos os itens do inventário

// 📌 Objetivo:

// Separar responsabilidades em funções
// Trabalhar com estado (dados persistentes)

let inventory = [];

function addItemInventory(item) {
    if (typeof item !== "string" || item.trim() === "") { // validação
        console.log("Item inválido!");
        return // early return
    }

    inventory.push(item);
}

function showItemsInventory() {
    if (inventory.length === 0) {
        console.log("Inventário vazio.");
        return;
    }

    for (const item of inventory) {
        console.log(`- ${item}`);
    }
}

addItemInventory(753);
addItemInventory();
// addItemInventory("espada");
// addItemInventory("poção");
showItemsInventory();