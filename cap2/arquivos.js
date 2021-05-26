var fs = require("fs");
var nomeArquivo = "meuArquivo.txt";

/*var x;
if (x) {
    console.log("x tem valor");
} else {
    console.log("x nao tem valor");
}*/

console.log("1");

fs.writeFile(nomeArquivo, "um texto qualquer", function(err) {
    if (err !== null) {
        console.log(err);
    } else {
        fs.appendFile(nomeArquivo, "\nnova linha no texto", function(err) {
            if (err) {
                console.log(err);
            } else {
                fs.readFile(nomeArquivo, "utf-8", function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    } 
                });
            }
        });
    }   
});

console.log("2");