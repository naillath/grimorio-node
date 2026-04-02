// Objetos - Coleção de chave-valor, pode conter qualquer tipo de dado. Contém métodos e propriedades para manipular os dados.

const player = {
    nickname: "Naillath",
    health: 80,
    isDead: false,
    present() {
        console.log("Olá, eu sou o Mago", this.nickname);
    }
}

// Como acessar propriedades e métodos

console.log(player.nickname);
console.log(player["health"]);
player.present();

// Como acessar o nome da propriedade

for (const prop in player) {
    console.log(prop);
}