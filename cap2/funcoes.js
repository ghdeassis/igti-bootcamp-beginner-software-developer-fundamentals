funcaoSemParametro();

function multiplicacao(p1, p2) {
    console.log("function multiplicacao executada");
    return p1 * p2;
}

function saudacao(nome) {
    console.log("Olá " + nome + " seja bem vindo!");
}

function funcaoSemParametro() {
    var a = 1;
    var b = 2;
    console.log(a + b);
}

var resultado = multiplicacao(4, 3);
console.log(resultado);
console.log(multiplicacao(10, 2));
saudacao("Guilherme");


//console.log(a);