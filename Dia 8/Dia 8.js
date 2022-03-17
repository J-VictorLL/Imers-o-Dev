var carta1 = {
    nome: "Bubassauro",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2014/08/bulbasaur.png",
    atributo: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
}
var carta2 = {
    nome: "Dart Vader",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg",
    atributo: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
}
var carta3 = {
    nome: "Shiryu de dragão",
    imagem: "https://s.aficionados.com.br/imagens/artigo-shiryu-de-dragao_t.jpg",
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
    //exibirOpcoes();
    exibirCartas(1);

   // console.log(cartaJogador)
   // console.log(cartaMaquina)
   document.getElementById("btnSortear").disabled = true;
   document.getElementById("btnJogar").disabled = false;
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
        //console.log(cartaJogador)
        console.log(cartaMaquina)
        //console.log(cartaJogador.atributo[atributoSelecionado]);
        if(valorCartaJogador>valorCartaMaquina){
            elementoResultado.innerHTML = "Você venceu!";
        }else if(valorCartaJogador<valorCartaMaquina){
            elementoResultado.innerHTML = "Você perdeu!";
        }else{
            elementoResultado.innerHTML = "Empatou!";
        }
        exibirCartas(2);
    }else{
        elementoResultado.innerHTML = "Erro! Selecione um atributo para jogar!";
    }

   
}
/*
function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador");

    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    //divCartaJogador.style.backgroundImage = "url("+cartaJogador.imagem+")";
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    //exibirOpcoes();
    var tagHtml = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributo){
        opcoesTexto += "<input type='radio' name='atributo' id='atributo' value="+atributo+">"+atributo+" "+cartaJogador.atributo[atributo]+"<br>";
    }

    var nome = `<p class="carta-subtitle"> ${cartaJogador.nome}`;

    divCartaJogador.innerHTML = moldura + nome + tagHtml + opcoesTexto;
}

function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina");

    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    //divCartaJogador.style.backgroundImage = "url("+cartaJogador.imagem+")";
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    //exibirOpcoes();
    var tagHtml = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""
    for(var atributo in cartaMaquina.atributo){
        opcoesTexto += "<p name='atributo' id='atributo_maquina'>"+atributo+" "+cartaMaquina.atributo[atributo]+"</p>";
    }

    var nome = `<p class="carta-subtitle"> ${cartaMaquina.nome}`;

    divCartaMaquina.innerHTML = moldura + nome + tagHtml + opcoesTexto;
}
*/

function exibirCartas(A){
    var divCarta, carta;
    switch(A){
        case 1: divCarta = document.getElementById("carta-jogador");
                carta = cartaJogador;
                break;
        case 2: divCarta = document.getElementById("carta-maquina");
                carta = cartaMaquina;
                break;
    }

    divCarta.style.backgroundImage = `url(${carta.imagem})`;
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHtml = "<div id='opcoes' class='carta-status'>"
    var opcoesTexto = "";

    switch(A){
        case 1: for(var atributo in carta.atributo){
                    opcoesTexto += "<input type='radio' name='atributo' id='atributo' value="+atributo+">"+atributo+" "+carta.atributo[atributo]+"<br>";
                }
                break;
        case 2: for(var atributo in carta.atributo){
                    opcoesTexto += "<p name='atributo' id='atributo_maquina'>"+atributo+" "+carta.atributo[atributo]+"</p>";
                }
                break;
    }

    var nome = `<p class="carta-subtitle"> ${carta.nome}`;
    divCarta.innerHTML = moldura + nome + tagHtml + opcoesTexto;
}