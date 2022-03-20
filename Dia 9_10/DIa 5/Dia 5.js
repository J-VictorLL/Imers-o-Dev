var registroListaFilme = []
var registroNListaFilme = []
/*
function addEndereçoFilme(){
    return document.getElementById("filme").value;;
}
*/
function listarFilmeNaTela(filmeFavorito,nomeFilme){
    registroListaFilme.push(filmeFavorito);
    registroNListaFilme.push(nomeFilme);
    document.getElementById("listaFilmes").innerHTML = document.getElementById("listaFilmes").innerHTML + "<figure><img src="+filmeFavorito+"><figcaption>"+nomeFilme+"</figcaption></figure>";
}


function imprimirFilmes(){
        document.getElementById("listaFilmes").innerHTML = "";
        for (var i = 0; i<registroListaFilme.length;i++){
            document.getElementById("listaFilmes").innerHTML = document.getElementById("listaFilmes").innerHTML + "<figure><img src="+registroListaFilme[i]+"><figcaption>"+registroNListaFilme[i]+"</figcaption></figure>";
        }
}

function removerFilme(){
    var filme= document.getElementById("filme").value;
    var idex = registroListaFilme.indexOf(filme);
    //console.log("idex ="+idex);
    //console.log(registroListaFilme.length);
    if(idex > -1){
        registroListaFilme.splice(idex, 1);
    }
    imprimirFilmes();
    //console.log(registroListaFilme.length);
    document.getElementById("filme").value = "";
    document.getElementById("nomeFilme").value = "";
}


function adicionarFilme(){
    //console.log("clicou");
    var filmeFavorito= document.getElementById("filme").value;
    var nFilmeFavorito = document.getElementById("nomeFilme").value;
    if(filmeFavorito.endsWith(".jpg")||filmeFavorito.endsWith(".png")){
        //console.log(campoilmeFavorito);
        //var elementoFilmeFavorito = "<img src="+filmeFavorito+">";
        //var elementoListaFilmes = document.getElementById("listaFilmes");
        //elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
        listarFilmeNaTela(filmeFavorito,nFilmeFavorito);
    }else{
        console.error("Endereço de filme invalido!");
    }
    document.getElementById("filme").value = "";
    document.getElementById("nomeFilme").value = "";
}