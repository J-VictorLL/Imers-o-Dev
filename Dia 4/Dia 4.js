/*var listaFilme = ["https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSPIwh-wreoOZDC1Mcd_I4XYPh2Z-Nz_NiK-QdgtGEbCJPDlFYC", "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg", "https://static.wikia.nocookie.net/disney/images/9/9f/Poster_A_Bela_e_a_Fera.jpg/revision/latest/scale-to-width-down/270?cb=20150412202906&path-prefix=pt-br"];

for (var i = 0; i < listaFilme.length; i++){
    document.write("<img src=" + listaFilme[i] +">");
}

//o uso do document.write depois de o html ter sido lido, ele aparag tudo da pagina e escreve em cima
}*/

var listaFilme = [];

function adicionar(){
    var novoHtmlImg = "";
    var link = document.getElementById("Adicionar").value;
    var resul = document.getElementById("resultado");
    var Coferir = document.getElementById("Coferir");
    //resul.innerHTML = link;
    var a = true;
    for (var i = 0; i < listaFilme.length; i++){
        if(link === listaFilme[i]){
            Coferir.innerHTML = "Já adiconado";
            a = false;
        }
    }
    if(a){
        listaFilme.push(link);
        for (var i = 0; i < listaFilme.length; i++){
            novoHtmlImg = novoHtmlImg + "<img src=" + listaFilme[i] +">     ";
        }
        resul.innerHTML = novoHtmlImg;
        Coferir.innerHTML = "";
    }
}