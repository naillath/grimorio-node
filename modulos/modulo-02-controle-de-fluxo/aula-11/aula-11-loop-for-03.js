const text = "Vou me tornar programador e dar uma vida melhor pra minha família!";
const letter = "a";
let times = 0;

for (const char of text.toLowerCase()) {
    if (char === "a") times ++;
}

console.log(`A letra (${letter}) se repete ${times} vezes.`);