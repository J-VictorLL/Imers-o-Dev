function ConverterR(){
    var valorElemnto = document.getElementById("valor");
    var valor = valorElemnto.value;
    var valorEmDolar = parseFloat(valor)
    var valorEmReal = valorEmDolar * 5.06;//considerando que está 5 para 1 a conversão real para dolar
    //console.log(valorEmReal);
    var valorConvertido = document.getElementById("valorConvertido");
    var textoAux = "O resultado em R$ é: " + valorEmReal;

    valorConvertido.innerHTML = textoAux;
}
function ConverterY(){
    var valorElemnto = document.getElementById("valor");
    var valor = valorElemnto.value;
    var valorEmIene = parseFloat(valor)
    var valorEmReal = valorEmIene * 0.044;
    var valorConvertido = document.getElementById("valorConvertido");
    var textoAux = "O resultado em ¥ é: " + valorEmReal;

    valorConvertido.innerHTML = textoAux;
}
function ConverterE(){
    var valorElemnto = document.getElementById("valor");
    var valor = valorElemnto.value;
    var valorEmEuro = parseFloat(valor)
    var valorEmReal = valorEmEuro * 5.52;
    var valorConvertido = document.getElementById("valorConvertido");
    var textoAux = "O resultado em € é: " + valorEmReal;

    valorConvertido.innerHTML = textoAux;
}

function ConverterA(){
    var valorElemnto = document.getElementById("valorD");
    var valor = valorElemnto.value;
    var valorDistancia = parseFloat(valor)
    var valorEmAnos = valorDistancia/9460536207068.02;
    var valorConvertido = document.getElementById("valorConvertido2");
    var textoAux = "Levara " + valorEmAnos + " anos até chegar ao destino.";

    valorConvertido.innerHTML = textoAux;
}

function ConverterF(){
    var valorElemnto = document.getElementById("valorT");
    var valor = valorElemnto.value;
    var valorEmC = parseFloat(valor)
    var valorEmF= ((valorEmC * 9)/5) + 32;
    var valorConvertido = document.getElementById("valorConvertido3");
    var textoAux = "O resultado em R$ é: " + valorEmF;

    valorConvertido.innerHTML = textoAux;
}
function ConverterK(){
    var valorElemnto = document.getElementById("valorT");
    var valor = valorElemnto.value;
    var valorEmC = parseFloat(valor)
    var valorEmK= valorEmC + 273.15;
    var valorConvertido = document.getElementById("valorConvertido3");
    var textoAux = "O resultado em R$ é: " + valorEmK;

    valorConvertido.innerHTML = textoAux;
}

//console.log("Passei por aqui");