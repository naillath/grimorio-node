// Crie um array de objetos representando três equipamentos:

const equipamentos = [
    {nome: "Espada do Herói", tipo: "Arma", poder: 150},
    {nome: "Escudo de Madeira", tipo: "Defesa", poder: 100},
    {nome: "Arco Élfico", tipo: "Arma", poder: 200}
]



const buscarArmas = equipamentos.filter(equipamento => equipamento.tipo === "Arma");

console.log(equipamentos);
console.log();
console.log(buscarArmas);