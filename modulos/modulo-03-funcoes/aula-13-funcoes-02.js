// Parametros opcionais

function createTag(name, prefix, suffix) {
    if (prefix && suffix) {
        return `${prefix} ${name} ${suffix}`;
    } 
    if (prefix) {
        return `${prefix} ${name}`;
    }
    return name;
}

const tag = createTag("Naillath", "[Desenvolvedor]");

console.log(tag);

function pow(number, exponent=2) {
    return number ** exponent;
}

const result = pow(3);
console.log(result);


function greet(name, log=false) {
    const text = `Seja bem vindo(a) ${name}`;
    if (log) {
        console.log(text);
        return;
    }
    return text;
}

const text = greet("Naillath", true);
console.log(text);