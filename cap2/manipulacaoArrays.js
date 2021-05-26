var carros = ["Gol", "Palio", "Uno", "Sandero"];

//pop remove o ultimo do elemento do array e retorna o elemento removido
var carro = carros.pop();
/*console.log(carro);
console.log(carros);*/

//push insere o elemento no fim do array e retorna seu novo tamanho
var x = carros.push("Ford Ka");
/*console.log(x);
console.log(carros);*/

//shift remove o primeiro elemento do array, retorna ele e atualiza os outros indices
carro = carros.shift();
/*console.log(carro);
console.log(carros);*/

//unshift adiciona um elemento no inicio do array, 
//atualiza os outros indices e retorna o novo tamanho do array
x = carros.unshift("Onix");
/*console.log(carros);
console.log(x);*/

//atualizar elemento do indice informado
carros[2] = "Novo Uno";
//console.log(carros);

//remove elemento do indice informado, deixando um undefined no lugar
/*delete carros[2];
console.log(carros);*/

/*
   primeiro parametro: posicao inicial
   segundo parametro: quantos elementos serao removidos a partir da posicao inicial
   terceiro e demais parametros: elementos que serao inseridos a partir da posicao inicial
*/
carros.splice(2, 0, "HRV", "Creta");
//console.log(carros);

carros.splice(2, 1);
//console.log(carros);

//concat concatena um array em outro e retorna o novo array criado
var carrosAntigos = ["Brasilia", "Monza", "Fusca"];
var carrosAntigos2 = ["Corcel", "Chevet"];
var todosCarros = carros.concat(carrosAntigos, carrosAntigos2);
//console.log(todosCarros);

/*splice cria um novo array sem alterar o array original.
  primeiro parametro: posicao inicial
  segundo parametro (opcional): posicao final (nao incluso)
*/
var novoArray = todosCarros.slice(1);
//console.log(novoArray);
var novoArray2 = todosCarros.slice(2, 5);
//console.log(novoArray2);