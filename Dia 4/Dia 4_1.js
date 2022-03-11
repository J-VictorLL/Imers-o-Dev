/*
var filme1 = "Encanto";
var filme2 = "A chegada";
var filme3 = "A bela e a fera";

document.write("<p>" + filme1 + "</p>");
document.write("<b>" + filme2 + "</b><br><br><br><br>");
document.write("<i>" + filme3 + "</i>");
document.write("<h1>" + filme1 + "</h1>");
document.write("<h2>" + filme2 + "</h2>");
document.write("<h3>" + filme3 + "</h3>");
*/
var listaFilmes = ["Encanto", "A chegada", "A bela e a fera"];
/*
document.write("<p>" + listaFilmes + "</p>");
document.write("<b>" + listaFilmes + "</b><br><br><br><br>");
document.write("<i>" + listaFilmes + "</i>");

document.write("<p>" + listaFilmes[0] + "</p>");
document.write("<b>" + listaFilmes[1] + "</b><br><br><br><br>");
document.write("<i>" + listaFilmes[2] + "</i>");

document.write("<p>" + listaFilmes[3] + "</p>");//teste/*/
listaFilmes.push("Harry Potter");
listaFilmes.push("Harry Potter 2");
listaFilmes.push("Harry Potter 3");
//document.write("<p>" + listaFilmes[3] + "</p>");
//for (var indice = 0; indice <= 3; indice++){
for (var indice = 0; indice < listaFilmes.length; indice++){
    //document.write("<p>" + indice + "</p>");
    document.write("<p>" + listaFilmes[indice] + "</p>");
}