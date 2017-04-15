var socket= io.connect('http://localhost:8080');


socket.on('mensajeschat', function(datos){
$('#estado').html('Te has conectado al chat');
		nickname=prompt('Nombre?');
		socket.emit('unir', nickname);
		socket.nickname=nickname;
		console.log(socket.nickname);
});



// $(document).ready(function(){
	// $('#chatformu').submit(function(e){
			// alert('eeeh');

		// var mensaje=$('#chatmensaje').val();
		// socket.emit('mensajeschat',{info: mensaje});
	// });
// });

socket.on('borrar usuario', function(nombre){
	
	alert('Hay que borrar el usuario');
	
	
});
