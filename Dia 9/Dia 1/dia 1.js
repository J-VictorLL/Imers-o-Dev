var name = "João Victor"

//parte 1
//var notaPrimeiroBimestre = "8"
//Obs.: se houver duas variaveis com mesmo nome, o priemiro é usado até a linha em que o outro é declarado.
//parte 2 -  correção da 1
var notaPrimeiroBimestre = 8
var notaFinal = notaPrimeiroBimestre + 2 

console.log("Bem vindo "+ name)
console.log("Nota final: "+notaFinal)

//parte 3 
var notaPrimeiroBimestre = 8
var notaSegundoBimestre = 10
var notaTerceiroBimestre = 9
var notaQuartoBimestre = 7
var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4 

console.log("Bem vindo "+ name)
console.log("Nota final: "+notaFinal)

//parte 4
var notaPrimeiroBimestre = 8.1246
var notaSegundoBimestre = 9.9813
var notaTerceiroBimestre = 9.1246
var notaQuartoBimestre = 7.8653
var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4 

console.log("Bem vindo "+ name)
console.log("Nota final: "+notaFinal.toFixed(2))

//Desafio 1
var notaPrimeiroBimestre = 8.1246
var notaSegundoBimestre = 9.9813
var notaTerceiroBimestre = 9.1246
var notaQuartoBimestre = 7.8653
var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4 

if(notaFinal>=7.00){
    console.log("Foi aprovado com nota final "+notaFinal.toFixed(2))
}else{
    console.log("Foi reprovado com nota final "+((notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4).toFixed(2))
}


function nota() {
    document.getElementById("a").textContent = "Foi aprovado com nota final "+notaFinal.toFixed(2);
  }
