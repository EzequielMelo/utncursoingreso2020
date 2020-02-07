function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numAleatorio= parseInt(Math.random()*10+1);
	if(numAleatorio>=9){
		alert("Excelente: "+numAleatorio);
	}else if(numAleatorio>4 && numAleatorio<9){
		alert("Aprobo: "+numAleatorio)
	}if(numAleatorio<4){
		alert("Vamos, la proxima se puede: "+numAleatorio)
	}
	

}//FIN DE LA FUNCIÓN