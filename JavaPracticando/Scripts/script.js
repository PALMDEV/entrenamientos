/*

var texto="hola";
var numero=5;
var concateno=texto+" "+numero;
var cosa=[true,false,5,3,"bryan","javier"];
//          0   ,1,  2,3   ,4     ,5
var introducirNumero= prompt("introdusca un numero");

var suma=cosa[2]+cosa[3]+introducirNumero;//Error concatena

for (i in cosa)
{
	alert(cosa[i]);
}
alert(suma);

alert(concateno);
*/

var usuario=["javier","bryan"];
var contra=["pigui","moly"];

usuario2=prompt("introdusca usuario");
contrasena=prompt("contrasena");

for(i in usuario)
{
	if(usuario2==usuario[i])
	{
		if(contrasena==contra[i])
		{
			alert("Es valido");
		}
		else{
		alert("Usuario o Contrasena incorrecta");
		}
	}
	

}
