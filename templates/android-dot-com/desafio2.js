//Desafio 2.0

//CAPTURANDO O ELEMENTO HTML USANDO UM ATRIBUTO AO INVÉS DA CLASSE PARA PRATICAR O USO DO DATA ATTRIBUTE:
var viewSource = document.querySelector("[teste]");
var botaoViado = document.querySelector(".Viado");
var androidTitulo = document.querySelector(".android-logo-image");

//ADICIONANDO UM ESCUTADOR NO ELEMENTO DO BOTÃO VIEW SOURCE, QUE AO SER CLICADO IRÁ COLOCAR A VARIÁVEL E O EVENTO NO DATALAYER:
viewSource.addEventListener("click", function(){
	dataLayer.push({
		//VARIÁVEL:
		"tipo_botao":"view_source",
		//EVENTO:
		"event":"disparo-personalizado"

	});
});

botaoViado.addEventListener("click", function(){
  dataLayer.push({});
;});
  
androidTítulo.addEventListener("click", function(){
  dataLayer.push({});
 });
