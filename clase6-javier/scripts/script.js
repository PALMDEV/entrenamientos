
function Texto(max){
	var elemento= document.getElementById("comentario");
	var presenta= document.getElementById("presenta");
	var tamano=elemento.value.length;
	if (elemento.value.length>=max && document.onkeydown!=8 && document.onkeydown!=40 && document.onkeydown!=39
	&& document.onkeydown!=38 && document.onkeydown!=37 ) {
		return false;
	}
	else{

		tamano=tamano+1;
		Num=tamano-1;
		alert(Num)
		presenta.innerHTML="Le faltan"+Num;
		return true;
	}	
}
/*

function Texto(max){
	var elemento= document.getElementById("comentario");
	var tamano=elemento.value.length;
	var presenta=document.getElementById("presenta");
	if (elemento.value.length>=max && document.onkeydown!=8 && document.onkeydown!=40 && document.onkeydown!=39
	&& document.onkeydown!=38 && document.onkeydown!=37 ) {
		return false;
	}
	else{
		//if (document.onkeydown==8) {
			
			tamano=tamano+1;
	 		//presenta.innerHTML="Numero"+tamano;
			
			
			//tamano-=1;
			alert(tamano);
			//presenta.innerHTML="Numero"+tamano;
			
		return true;
	}	

}
*/
