var dark = false;
function mudarTema(){
    dark = !dark;
    var botao = document.getElementById("tema");
    //botao.innerHTML="";
    document.body.classList.toggle("dark");
    botao.classList.toggle("Tema_dark");
    if(dark){
       botao.innerHTML="<img src='101361.png'> Tema Claro"; 
    }else{
        botao.innerHTML="<img src='1415431.png'> Tema Escuro";
    }
}