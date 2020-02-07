function mostrar()
{
//tomo la edad  
	var edad= parseInt(document.getElementById("edad").value);
	if(edad>=18){
		alert("Usted es mayor de edad");
	}else if(edad>=13 && edad<=17){
		alert("Usted es adolescente");
	}else{
		alert("Es un niño");
	}



}//FIN DE LA FUNCIÓN