// Variáveis  - São como caixas, que servem para armazenar informações. Essas informações podem ser de diversos tipos, como números, textos, booleanos, etc. Para criar uma variável, usamos a palavra-chave "var", "let" ou "const", seguida do nome da variável e do valor que queremos armazenar nela. Por exemplo:

const myName = 'Lucas'; // Constante - O valor não pode ser alterado depois de atribuído
let myAge = 30; // let - O valor pode ser alterado posteriormente
var myProfession = 'Desenvolvedor'; // var - O valor pode ser alterado posteriormente, mas é recomendado usar let ou const para evitar problemas de escopo

// Regra prática - Use "const" para variáveis que não precisam ser reatribuídas, e "let" para variáveis que podem ser reatribuídas. Evite usar "var" para evitar problemas de escopo e hoisting.

{ // Escopo de bloco - Variáveis com let/const declaradas dentro deste bloco não serão acessíveis fora dele

    // Tipos de dados - Em JavaScript, existem vários tipos de dados que podemos usar para armazenar informações. Alguns do tipos mais comuns são:

    const myName = 'Lucas'; // String - Armazena texto
    const myAge = 30; // Number - Armazena números
    const isDeveloper = true; // Boolean - Armazena valores verdadeiros ou falsos
    const mySkills = ['JavaScript', 'Python', 'Git']; // Array - Armazena uma lista de valores
    
    const myProfile = { // Object - Armazena um conjunto de pares chave-valor
        name: 'Lucas',
        age: 30,
        profession: 'Desenvolvedor',
        skills: ['JavaScript', 'Python', 'Git']
    };
};