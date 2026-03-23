// Estrutura de repetição for - Usado em situações de loops/repetições em que você sabe quantas vezes algo precisa se repetir.
// for (inicialização; condição; incremento) {
//    // código a ser executado
// }

for (let i = 0; i < 10; i++) {
    setTimeout(() =>  console.log(i), 500 * i);
}

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }