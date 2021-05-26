/*
    Criar um jogo no qual o jogador tenha que adivinhar um número. 
    O jogo deve gerar um número aleatório entre 1 e 100, e depois desafiar 
    o jogador a descobrir qual o número em no máximo 10 tentativas. 
    A cada tentativa, caso o jogador não tenha acertado o número, o jogo 
    deve informar se o número informado é maior ou menor que o sorteado. 
    O jogo termina se o jogador acertar o número ou acabarem o número 
    de tentativas.

    1) Gerar um número aleatório entre 1 e 100
    2) Inicializar o número de tentativas como 10
    3) Pedir o jogador para tentar adivinhar o número
    4) Decrementar o número de tentativas
    5) Verificar se a tentativa está correta
    6) Se estiver correta:
        - Informar que acertou o número
        - Encerrar o jogo
    7) Se estiver incorreta, e acabaram as tentivas:
        - Informar que ele não venceu
        - Encerrar o jogo
    8) Se estiver incorreta, e ainda existirem tentativas:
        - Informar se a tentiva é maior ou menor que o número sorteado
        - Pedir outra tentativa para o jogador
*/
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var numeroAleatorio = Math.round(Math.random() * 100);
if (numeroAleatorio === 0) {
    numeroAleatorio = 1;
}

var numeroTentativas = 10;

pergunta();

function pergunta() {
    rl.question("Digite um número: ", function(numero) {
        numero = parseInt(numero);
        numeroTentativas--;
        if (numero === numeroAleatorio) {
            console.log("Parabéns, você acertou o número!");
            rl.close();
        } else if (numeroTentativas === 0) {
            console.log("Que pena, você não descobriu o número em 10 tentativas.");
            rl.close();
        } else if (numero > numeroAleatorio) {
            console.log("Número errado, você ainda tem " + numeroTentativas + " tentativas. " +
                        "O número informado é maior que o sorteado.");
            pergunta();
        } else {
            console.log("Número errado, você ainda tem " + numeroTentativas + " tentativas. " +
                        "O número informado é menor que o sorteado.");        
            pergunta();
        }
    });
}