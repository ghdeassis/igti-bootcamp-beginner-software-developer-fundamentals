function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var imc = peso / (altura * altura);
    var imcResultado = "";

    if (imc < 18.5) {
        imcResultado = "abaixo do normal";
    } else if ((imc >= 18.5) && (imc < 25)) {
        imcResultado = "normal";        
    } else if ((imc >= 25) && (imc < 30)) {
        imcResultado = "sobrepeso";
    } else if ((imc >= 30) && (imc < 40)) {
        imcResultado = "obesidade";
    } else {
        imcResultado = "obesidade grave"
    }

    document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc;
    document.getElementById("descricaoResultado").innerHTML = 
        "Seu IMC indica que seu peso está: " + imcResultado;
}

function limpar() {
    document.getElementById("altura").value = 0;
    document.getElementById("peso").value = 0;
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("descricaoResultado").innerHTML = "";
}