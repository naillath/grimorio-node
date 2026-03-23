// Estrutura condicional switch

// switch (valor) {
//     case "esperado": {
//         ...
//         break;
//     }
// }

const animal = "gato";

switch(animal) {
	case "gato": {
		console.log("miau");
		break;
	}
	case "galinha": {
		console.log("cocorico");
		break;
	}
    case "cachorro": {
        console.log("au au");
        break;
    }
    case "pato": {
        console.log("qua qua");
        break;
    }
    case "pássaro": {
        console.log("bem-te-vi");
        break;
    }
}


const stuff = "queijo";

switch(stuff) {
    case "pizza":
    case "bolo":
    case "hamburguer":
    case "pastel": {
        console.log("comida");
        break;
    }
    case "gato":
    case "cachorro":
    case "galinha":
    case "vaca": {
        console.log("animal");
        break;
    }
    case "pá":
    case "martelo":
    case "enxada":
    case "marreta": {
        console.log("ferramenta");
        break;
    }
    default: {
        console.log("não listado"); // Opção padrão, para sempre que uma opção não for listada.
    }
}