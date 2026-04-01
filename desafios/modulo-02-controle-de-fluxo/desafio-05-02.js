// 5. 👾 Batalha por Turnos (loop while)

// Simule uma batalha:

// Herói e monstro possuem vida
// Cada rodada ambos atacam

// Use while para:

// Continuar a batalha até um dos dois morrer
// Mostrar o status a cada turno

// refaz do zero
// tenta melhorar
// organiza em função

let vidaHeroi = 100;
let vidaMonstro = 50;

const ataqueHeroi = 15;
const ataqueMonstro = 10;


function modoBatalha() {

    while (vidaHeroi > 0 && vidaMonstro > 0) {
        vidaMonstro -= ataqueHeroi;
        vidaHeroi -= ataqueMonstro;

        console.log(`Herói desfere um golpe que causa ${ataqueHeroi} de dano no Monstro o deixando com ${vidaMonstro} pontos de vida.`);
        console.log(`Monstro desfere um golpe que causa ${ataqueMonstro} de dano no Herói o deixando com ${vidaHeroi} pontos de vida.\n`);
       

        if (vidaHeroi <= 0) {
            console.log("\nHerói foi morto pelo monstro!");
        } else if (vidaMonstro <= 0) {
            console.log("\nMonstro foi morto pelo Herói!");
        }
    }
}

modoBatalha()