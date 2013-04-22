i=0;
function agregar()
{

tabla= document.getElementById("lista");
lista=document.createElement("li");
contenido=document.createTextNode("bryan" +" "+ ++i);
lista.appendChild(contenido);
tabla.appendChild(lista);

}
i2=0;
function agregarFila(){
i2++;
	if(i2==1){
		agregarColumna;
		tablaPadre=document.getElementById("Tabla");
		fila=document.createElement("tr");
		tablaPadre.appendChild(fila);
	}
else{
	tablaPadre=document.getElementById("Tabla");
	fila=document.createElement("tr");
	tablaPadre.appendChild(fila);

	}
}

function agregarColumna(){

	if(i2>0)
	{	
		tablaPadre=document.getElementById("Tabla");
		filas=tablaPadre.getElementsByTagName("tr");
		columna=document.createElement("td");
		cont=document.createTextNode("hola");
		columna.appendChild(cont);
		
		filas[0].appendChild(columna);
		
	}
}

