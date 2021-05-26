var carros = ["Gol", "Palio", "Uno"];
console.log(carros);


var primeiroCarro = carros[0];
var segundoCarro = carros[1];
var terceiroCarro = carros[2];

console.log("primeira posicao: " + primeiroCarro);
console.log("segunda posicao: " + segundoCarro);
console.log("terceira posicao: " + terceiroCarro);

carros[2] = "Argo";
console.log(carros[2]);

console.log(terceiroCarro);

console.log("tamanho do array: " + carros.length);
console.log("ultimo elemento do array: " + carros[carros.length - 1]);

carros[3] = "Sandero";
console.log("ultimo elemento do array: " + carros[carros.length - 1]);

carros[carros.length] = "Fit";
console.log("ultimo elemento do array: " + carros[carros.length - 1]);

carros.push("Polo");
console.log(carros);

carros.push(123);
console.log(carros);