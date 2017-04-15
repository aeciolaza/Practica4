var express = require('express');
var app=express();
var server=require('http').createServer(app);
var io=require('socket.io')(server);

app.use(express.static('public'));

io.on('connection',function(client){
	console.log('Client connected...');
	client.on('mensajeschat',function(datos){
		console.log(datos.info);
		client.broadcast.emit('mensajeschat',datos);
	});
	
	client.on('unir', function(nombre){
		client.nickname=nombre;
		client.broadcast.emit('unir', client.nickname);
	});
});

server.listen(8080);