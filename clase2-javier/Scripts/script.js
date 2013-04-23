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

	tablaPadre=document.getElementById("Tabla");
	fila=document.createElement("tr");
	tablaPadre.appendChild(fila);
++i2;
}
i5=0;
ifila=0;

function agregarColumna(){
	if(i2!=ifila){++i5;}
	if(i5<=5 )
	{	
		tablaPadre=document.getElementById("Tabla");
		filas=tablaPadre.getElementsByTagName("tr");
		columna=document.createElement("td");
		cont=document.createTextNode("hola");
		columna.appendChild(cont);
		filas[ifila].appendChild(columna);
		alert(ifila+" "+i2+" "+i5);
	}
	if(i5%5==0){
		++ifila;
		i5=0;
	}
	
}

