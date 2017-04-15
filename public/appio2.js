var socket= io.connect('http://localhost:8080');


socket.on('bienvenida', function(datos){
	alert(datos.saludo);
	
});