var rafa = {nome:"Rafa", vitorias:0, empates:0, derrotas:0, pontos:0};
var paulo = {nome:"Paulo", vitorias:0, empates:0, derrotas:0, pontos:0};
var jhon = {nome:"Jhon", vitorias:0, empates:0, derrotas:0, pontos:0};

//console.log(rafa.vitorias);
//console.log(paulo.empates);
function calcularPontos(jogador){
    var pontos = (jogador.vitorias*3) + jogador.empates;
    //console.log(pontos);
    //return pontos;
    jogador.pontos = pontos;
}
//calcularPontos(rafa);
//calcularPontos(paulo);
/*console.log(rafa.pontos);
var resultadosDosPontos = calcularPontos(rafa);
rafa.pontos = resultadosDosPontos;
console.log(rafa.pontos);*/
//calcularPontos(rafa);
//console.log(rafa.pontos);

var jogadores = [rafa,paulo,jhon];
//console.log(jogadores);

function decidirCampeao(jogadores){
    var champ = 0;
    var temp = 0
    for(var i=0; i<jogadores.length; i++){
        if(i==0){
            temp = jogadores[i].pontos;
        }else{
            if(jogadores[i].pontos > temp){
                temp = jogadores[i].pontos;
                champ = i;
            }
        }
    }
    return champ;
}

function exibeJogadoresNaTela(jogadores){
    var elemento = "";
    var campeão = decidirCampeao(jogadores)
    for(var i=0; i<jogadores.length; i++){
        elemento +=  "<tr> <td>"+jogadores[i].nome;
        if(i==campeão){
            elemento += "<img src='transparent-gold-cup-trophy-png-picture-clipart-5a3c4b53d4e6c5.5771166715139008838721.jpg'></td>";
        }else{
            elemento += "</td>";
        }
        elemento +=  "<td>"+jogadores[i].vitorias+"</td>";
        elemento +=  "<td>"+jogadores[i].empates+"</td>";
        elemento +=  "<td>"+jogadores[i].derrotas+"</td>";
        elemento +=  "<td>"+jogadores[i].pontos+"</td>";
        elemento +=  "<td><button onClick='adicionarVitoria("+i+")'>Vitória</button></td>";
        elemento +=  "<td><button onClick='adicionarEmpate("+i+")'>Empate</button></td>"; //aspas simples no java script no lugar de aspas duplas quando adicionar html pelo JS
        elemento +=  "<td><button onClick='adicionarDerrota("+i+")'>Derrota</button></td>";
        elemento +=  "<td><button onClick='remover("+i+")'>Remover</button></td>";
        elemento +=  "</tr>";
    }
    //console.log(elemento)

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i){
    var jogador = jogadores[i];
    jogador.vitorias++;
    calcularPontos(jogadores[i]);
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i){
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i){
    var jogador = jogadores[i];
    jogador.empates++;
    calcularPontos(jogadores[i]);
    exibeJogadoresNaTela(jogadores);
}

function Adicionar(){
    var no = document.getElementById("nome").value;
    jogadores.push({nome:no, vitorias:0, empates:0, derrotas:0, pontos:0});
    exibeJogadoresNaTela(jogadores);
}
function remover(i){
    jogadores.splice(i, 1);
    exibeJogadoresNaTela(jogadores);
}