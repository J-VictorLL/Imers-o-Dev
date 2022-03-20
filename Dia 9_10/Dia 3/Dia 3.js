//var nSecreto = 3;
var nSecreto = parseInt(11*Math.random())//devolve um valor inteiro de 0 a n-1, n = 11
console.log(nSecreto);//para verificação

var tentativas = 0;

function Chutar(){
    var chute = parseInt(document.getElementById("valor").value);
    var imprimir = document.getElementById("resultado");
    //console.log(chute);
    if(chute == nSecreto){
        //console.log("Acertou o chute")
        imprimir.innerHTML = "Acertou o chute";
    }else if(chute>10 || chute<0){
        imprimir.innerHTML = "Valor invalido! Coloque um valor entre 0 e 10.";
    }else{
        //console.log("Errou o chute")
        //imprimir.innerHTML = "Errou o chute";
        tentativas ++;
        
        if(tentativas<5){
            if(chute>nSecreto){
                imprimir.innerHTML = "Errou! Tentativa "+tentativas+". Foi maior que o sorteado.";
            }else{
                imprimir.innerHTML = "Errou! Tentativa "+tentativas+". Foi menor que o sorteado.";
            }
        }else{
            imprimir.innerHTML = "Errou! Tentativas esgotadas! Novo número sorteado! O Antigo erá "+nSecreto;
            nSecreto = parseInt(11*Math.random())
            console.log(nSecreto);
            tentativas = 0;
        }
    }

   

   /* 
    var imprimir = document.getElementById("resultado");
    var textoAux = "valor inserido é "+chute;
    imprimir.innerHTML = textoAux;
    */
}