var carta1 = {
    nome: "Bubassauro",
    atributo: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
}
var carta2 = {
    nome: "Dart Vader",
    atributo: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
}
var carta3 = {
    nome: "Shiryu de dragão",
    atributo: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
}
//acesso
//onsole.log(carta1.atributo.ataque)

var cartas = [carta1, carta2, carta3];
var cartaMaquina = null;
var cartaJogador = null;

function sortearCarta(){
    numeroCartaMaquina = parseInt(Math.random()*3);
    cartaMaquina = cartas[numeroCartaMaquina];
    numeroCartaJogador = parseInt(Math.random()*3);
    while(numeroCartaJogador == numeroCartaMaquina){
        numeroCartaJogador = parseInt(Math.random()*3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    exibirOpcoes();

   // console.log(cartaJogador)
   // console.log(cartaMaquina)
   document.getElementById("btnSortear").disabled = true;
   document.getElementById("btnJogar").disabled = false;
}

function exibirOpcoes(){
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = ""

    for(var atributo in cartaJogador.atributo){
        opcoesTexto += "<input type='radio' name='atributo' id='atributo' value="+atributo+">"+atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obterAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo");
    for(var i = 0; i<radioAtributos.length; i++){
        if (radioAtributos[i].checked == true){
            return radioAtributos[i].value;
        }
    }
    return -1
}

function jogar(){
    var atributoSelecionado = obterAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    //console.log(atributoSelecionado)
    if(atributoSelecionado!=-1){
        var valorCartaJogador = cartaJogador.atributo[atributoSelecionado]
        var valorCartaMaquina = cartaMaquina.atributo[atributoSelecionado]
        console.log(cartaJogador)
        console.log(cartaMaquina)
        //console.log(cartaJogador.atributo[atributoSelecionado]);
        if(valorCartaJogador>valorCartaMaquina){
            elementoResultado.innerHTML = "Você venceu!";
        }else if(valorCartaJogador<valorCartaMaquina){
            elementoResultado.innerHTML = "Você perdeu!";
        }else{
            elementoResultado.innerHTML = "Empatou!";
        }
    }else{
        elementoResultado.innerHTML = "Erro! Selecione um atributo para jogar!";
    }
}


