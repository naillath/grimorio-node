let count = 0;

while(count <= 20) {
    count++;

    if (count % 2 === 0) {
        console.log(count, "É PAR");
        continue; // Pula para a próxima iteração do loop, ignorando o restante do código abaixo. Voltando para o início do loop.
    }
    
    console.log(count, "NÃO É PAR");
};