var express = require('express');
var app=express();
var server=require('http').createServer(app);
var io=require('socket.io')(server);

app.use(express.static('public'));

io.on('connection',function(client){
	console.log('Client connected...');
	client.on('unir',function(nombre){
		client.nickname=nombre;
		console.log('Se ha unido: ' + client.nickname);
	})
	
	client.on('disconnect',function(){
		console.log("Se ha desconectado: " + client.nickname);
		client.broadcast.emit('borrar usuario',client.nickname);
	});
});

server.listen(8080);