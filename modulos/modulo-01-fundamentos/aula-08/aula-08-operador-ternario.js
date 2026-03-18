// Operador Ternário - É como se fosse um if/else, só que um pouco mais enxuto

// (expressão) ? (se verdaideiro) : (se falso) 

const number = 5;

console.log((number % 2 === 0) ? 'PAR' : 'IMPAR');


const xpGained = 80;
const xpToNextLevel = 100;

console.log((xpGained > xpToNextLevel) ? 'Subiu de Nível' : 'Não Subiu de Nível');

const age = 18;
console.log((age >= 18) ? 'Maior de idade' : 'Menor de idade')

const learnedJs = true;
const withRincko = false;

console.log(
    (learnedJs && withRincko) 
    ? 'Aprendeu JavaScript com o Rincko Dev' 
    : learnedJs 
    ? 'Aprendeu JavaScript'
    : 'Não aprendeu JavaScript'
);

const bank = 500;
const transferValue = 450;

console.log(
    (transferValue < bank) ? 'A transferência pode ser feita'
    : 'A transferência não pode ser feita'
);

const isAdult = true;

console.log(`Cristiano ${isAdult ? 'não ' : ''}é criança`); // Dentro de uma string

const hours = 12;

console.log(
    'Está de',
    (hours >= 0 && hours <= 6) ? 'madrugada'
    : (hours <= 12) ? 'dia'
    : (hours <= 18) ? 'tarde'
    : 'noite'
);