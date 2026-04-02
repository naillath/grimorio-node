// Objetos

// const ramMemory1 = {
//     name: "Kingston",
//     size: 2000
// }

// const ramMemory2 = {
//     name: "Markvision",
//     size: 4000
// }

const computer = {
    motherboard: "MZ-B75-S",
    videoCard: null,
    cpu: "Intel Core i7 2600",
    font: {
        name: "Corsair",
        watts: 500
    },
    case: {
        name: "Rise Mode Galaxy Glass",
        color: "white"
    },
    // ram: [ramMemory1, ramMemory2] 
    ram: [
        {
            name: "Kingston",
            size: 2000
        },
        {
            name: "Markvision",
            size: 4000
        }
    ]
}

console.log("Informações do computador");
console.log("Placa mãe:", computer.motherboard);
console.log("Placa de vídeo:", computer.videoCard);
console.log("Processador:", computer.cpu);
console.log("Fonte:", computer.font.name, computer.font.watts, "Watts");
console.log("Gabinete:", computer.case.name, "Cor:", computer.case.color);
console.log("Memórias ram:");

for (const ram of computer.ram) {
    console.log(ram.name, ram.size, "MBs");
}