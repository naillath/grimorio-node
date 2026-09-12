// Objetos
const ramMemorySlot01 = {
    name: "Kingston",
    size: 4000
}

const ramMemorySlot02 = {
    name: "MarkVision",
    size: 2000
}


const computer = {
    motherboard: "B75M",
    videoCard: null,
    cpu: "Intel i7 2600",
    font: {
        name: "Corsair",
        watts: 500
    },
    case: {
        name: "RiseMode Galaxy Glass",
        color: "white"
    },
    ram: [ramMemorySlot01, ramMemorySlot02]
}

console.log("Informações do computador");
console.log("Placa mãe:", computer.motherboard);
console.log("Placa de vídeo:", computer.videoCard);
console.log("Processador:", computer.cpu);
console.log("Fonte:", computer.font.name, computer.font.watts, "Watts");
console.log("Gabinete:", computer.case.name, "Cor:", computer.case.color);
console.log("Memoria ram: ");
for(const ram of computer.ram) {
    console.log(ram.name, ram.size, "MBs");
}