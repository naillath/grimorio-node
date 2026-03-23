const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Bem vindo ao programa");
console.log("[1] 📅 Data atual");
console.log("[2] 🕑 Horário atual");
console.log("[3] 🐾 Ver animais");
console.log("[4] 🍰 Ver comidas");
console.log("[5] 💻 Ver linguagens");
console.log("[6] ❌ Sair");

rl.question("> Selecione o que deseja fazer: ", answer => {
    switch(answer) {
        case "1": {
            const date = new Date();
            const day = date.getDate();
            const month = date.getMonth()+1;
            const year = date.getFullYear();
            console.log(`Hoje é ${day}/${(month < 10 ? "0" : "") + month}/${year}`);
            break;
        }
        case "2": {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            console.log(`Agora são: ${hours}:${minutes}`)
            break;
        }
        case "3": {
            console.log("🐔 Galinha");
            console.log("🐮 Vaca");
            console.log("🐱 Gato");
            console.log("🐶 Cachorro");
            break;
        }
        case "4": {
            console.log("🍕 Pizza");
            console.log("🍰 Bolo");
            console.log("🍜 Macarrão");
            console.log("🍨 Sorvete");
            break;
        }
        case "5": {
            console.log("JavaScript");
            console.log("Java");
            console.log("Python");
            console.log("C/C++")
            break;
        }
        default: {
            console.log("Obrigado por usar o App!");
        }
    }
    rl.close();
});