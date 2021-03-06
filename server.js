const http = require('http');
const temp = require('./term/term.js');
const socket = require('socket.io');
const fs = require('fs');

const server = http.createServer((req,res)=>{
	switch(req.method){
	case 'GET':
		let fileContent = null;
		switch(req.url){
			case '/':
			fileContent = fs.readFileSync('./public/index.html','utf8');
			res.setHeader('Content-Type', 'text/html');
			res.statusCode = 200;
			res.end(fileContent);
			break;
			default:
			if(fs.existsSync('.'+req.url)){
			fileContent = fs.readFileSync('.'+req.url,'utf8');
			}
			else{
			fileContent = fs.readFileSync('./public/404.html','utf8');
                        res.statusCode = 404;
			}
			res.setHeader('Content-Type', 'text/html');
                        res.end(fileContent);
                        break;
		}
	}
});

const io = socket(server);

setInterval(()=>{
	io.emit('temp',{temp: temp.temp});
},1000);


io.on('connection', (socket)=>{
	console.log('New user connected!');
	io.on('disconnect',()=>{
		console.log('User disconnected!');
	});
});


server.listen(3503,()=>{
	console.log('Server listening to port 3500!');
});
