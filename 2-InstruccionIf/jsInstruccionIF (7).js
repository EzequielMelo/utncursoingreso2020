function mostrar()
{
//tomo la edad  
	var edad= parseInt(document.getElementById("edad").value);
	var eCivil= document.getElementById("estadoCivil").value;
	if(eCivil!="Soltero" && edad<18){
		alert("Es muy pequeño para no ser soltero");
	}


}//FIN DE LA FUNCIÓN