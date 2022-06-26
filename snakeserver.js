const http = require('http');
const fs = require('fs');
const app = express();

const filePath = __dirname + '/snakegame.html';

http.createServer((request, response) => {
	response.writeHead(200, {
		'Content-Type': 'html'
	});
	fs.readFile(filePath, (data, err) => {
		if (err) {
			response.writeHead(404);
			response.write(err);
			response.end();
		} else {
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
			response.write(data);
			response.end();
		}
	});
}).listen(8080);

// app.get('/', (request, response) => {
// 	response.sendFile(filePath);
// });