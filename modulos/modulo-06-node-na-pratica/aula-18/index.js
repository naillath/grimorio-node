// const { sum, sub, mut, div } = require("./functions/math"); // metodo para importar com commonjs
// const { catEmoji } = require("./constants/emojis");

import { sum, sub, mut, div } from "./functions/math.js";
import { catEmoji } from "./constants/emojis.js";

console.log(sum(7, 3));
console.log(sub(7, 3));
console.log(mut(7, 3));
console.log(div(7, 3));

console.log(catEmoji);

// node modulos/modulo-06-node-na-pratica/aula-18/index.js  // pra rodar no node
