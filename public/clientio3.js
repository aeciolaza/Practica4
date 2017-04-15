var socket= io.connect('http://localhost:8080');


socket.on('mensajeschat', function(datos){
	//alert('informacion a meter: ' + datos.info);
	    $("#panel").append("<p>"+ datos.info +"</p>");

});

socket.on('connect', function(datos){
	
	nickname=prompt("¿Cual es tu nickname?");
	socket.emit('unir', nickname);
	socket.nickname=nickname;
	console.log(socket.nickname);

});

socket.on('unir', function(nombre){
	
	//alert("Se ha unido: " + nombre);
		    $("#panel").append("<p>"+ "Se ha unido " +nombre +"</p>");

});
	
	
$(document).ready(function(){
	$('#chatformu').submit(function(e){
		//	

			//alert('eeeh');

		var mensaje=(nickname + ": " + $('#chatmensaje').val());
		socket.emit('mensajeschat',{info: mensaje});
		 $("#panel").append("<p>"+ nickname + ": "+$('#chatmensaje').val()  +"</p>");

		event.preventDefault();
	});
});