// Arrays

const names = ["Luffy", "Zoro", "Sanji"];

console.log(names);

names[1] = "Goku";
names[2] = "Naruto";

console.log(names);

names[3] = "Ichigo";

//  forma correta de adicionar novos itens no array, usando método push

names.push("Jinwoo");


console.log(names);
console.log(names.length);

// método usado para remover itens do arrays, método pop

// Remove e salva o ultimo item em uma variavel
const jinwoo = names.pop();

console.log(names);
console.log(jinwoo);

names.pop() // Aqui apenas remove e não salva

console.log(names);