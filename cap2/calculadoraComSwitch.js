var operacao = process.argv[2];
var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);

var resultado = 0;

switch (operacao) {
    case "soma":
        resultado = num1 + num2;
        break;
    case "subtracao":
        resultado = num1 - num2;
        break;
    case "multiplicacao":
        resultado = num1 * num2;
        break;
    case "divisao":
        resultado = num1 / num2;
        break;
    case "resto":
        resultado = num1 % num2;
        break;
    case "porcentagem":
        resultado = num1 * num2 / 100;
        break;
    default:
        resultado = 0;    
}

console.log(resultado);