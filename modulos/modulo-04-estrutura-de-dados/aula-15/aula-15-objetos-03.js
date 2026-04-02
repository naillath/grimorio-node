const player = {
    inventory: {
        items: [
            {
                name: "sword",
                durability: 160,
                enchatments: [
                    {name: "sharpness", level: 2},
                    {name: "unbreakable", level: 3}
                ]
            },
            {
                name: "shield",
                durability: 300
            }
        ],
        potions: [
            {type: "regeneration", duration: 12},
            {type: "defense", duration: 30}
        ]
    }
}

console.log(player.inventory.potions[0]);