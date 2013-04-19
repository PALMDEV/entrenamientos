

//base de datos
var usuarios=["luisjavier","user02","user"];
var claves=["123","1234","1235"];
	mensaje = "a";

	var user=prompt("introdusca su usuario");
	var pass=prompt("introdusca su clave");
	
	for(i in usuarios){
		
		if(user == usuarios[i]){
		
				for(o in claves){
				
					if(pass == claves[i]){
								
							mensaje = "es correcto puede entrar";
							break;
					}
				
				}
		
		}
		
	}
	
	 if(mensaje != "a"){
		
		alert(mensaje);
	 
	 }
	 else{
		alert("Clave o contraseña incorrecta");
	 }