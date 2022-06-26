const http = require('http');
const fs = require('fs');

const htmlPath = __dirname + '/snakegame.html';
const scriptPath = __dirname + '/snakescript.js';
const stylePath = __dirname + 'style.css';

http.createServer((request, response) => {
	fs.readFile(htmlPath, (data, err) => {
		if (err) {
			response.writeHead(404);
			response.write(err);
			response.end();
		} else {
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
			response.write(data);
		}
	});
	fs.readFile(stylePath, (data, err) => {
		if (err) {
			response.writeHead(400);
			response.write(err);
			response.end();
		} else {
			response.write(data);
		}
	});
	fs.readFile(scriptPath, (data, err) => {
		if (err) {
			response.writeHead(400);
			response.write(err);
			response.end();
		} else {
			response.write(data);
		}
	});
}).listen(8080);

// app.get('/', (request, response) => {
// 	response.sendFile(filePath);
// });