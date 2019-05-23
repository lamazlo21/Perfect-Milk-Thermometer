const http = require('http');
const temp = require('./term/term.js');
const io = require('socket.io');
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
			fileContent = fs.readFileSync('./public/404.html','utf8');
			res.setHeader('Content-Type', 'text/html');
                        res.statusCode = 404;
                        res.end(fileContent);
                        break;
		}
	}
});




server.listen(3500,()=>{
	console.log('Server listening to port 3500!');
});
