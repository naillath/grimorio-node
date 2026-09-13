// Crie um array com pelo menos quatro personagens. Cada personagem deve possuir:

const personagens = [
    {nome: "Naillath", nivel: 10, classe: "Mago"},
    {nome: "Apheru", nivel: 7, classe: "Guerreiro"},
    {nome: "Bunkoo", nivel: 8, classe: "Kunoichi"},
    {nome: "Giina", nivel: 9, classe: "Monge"}
];

const encontrarPersonagem = personagens.find(personagem => personagem.nome === "Khalled");

console.log(encontrarPersonagem);