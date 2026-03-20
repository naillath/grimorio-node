// Tipo de triângulo

const sideA = 3;
const sideB = 3;
const sideC = 3;

if (sideA === sideB && sideB === sideC) {
    console.log("O triângulo é equilátero.");
} else if (sideA === sideB || sideB === sideC || sideC === sideA) {
    console.log("O triângulo é isósceles.")
} else {
    console.log("O triângulo é escaleno.")
};