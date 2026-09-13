// Desafio 5 — Sistema de XP da Guilda

const personagens = [
    {nome: "Apheru", nivel: 3, xp: 30},
    {nome: "Naillath", nivel: 2, xp: 50},
    {nome: "Khalled", nivel: 1, xp: 0}
];

const adicionarExperiencia = personagens.find(personagem => personagem.nome === "Apheru");

console.log(adicionarExperiencia);

adicionarExperiencia.xp +=50

console.log(adicionarExperiencia);