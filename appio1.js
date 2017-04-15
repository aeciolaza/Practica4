var express = require('express');
var app=express();
var server=require('http').createServer(app);
var io=require('socket.io')(server);

app.use(express.static('public'));

io.on('connection',function(client){
	console.log('Client connected...');
});

server.listen(8080);