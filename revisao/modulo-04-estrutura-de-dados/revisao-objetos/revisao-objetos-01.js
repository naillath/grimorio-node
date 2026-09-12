// Objetos

const player = {
    nickname: "Naillath",
    class: "Mage",
    health: 20,
    isDead: false,
    present() {
        console.log(`Meu nome é ${this.nickname}`);
    }
}

console.log(player);
console.log(player.nickname);
console.log(player["class"]);
player.present();

for(const prop in player) {
    console.log(prop);
}