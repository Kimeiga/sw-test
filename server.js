let http = require('http');
let url = require('url');
let querystring = require('querystring');
let fs = require('fs');

http.createServer((request, response) => {
	let pathName = url.parse(request.url).pathname;

	fs.readFile(__dirname + pathName, (err, data) => {
		if (err) {
			response.writeHead(404, {'Content-Type': 'text/plain'});
			response.write(`404. Page was not found. ${JSON.stringify(err)}`);
			response.end();
		}
		else {
			if (pathName.endsWith('.html')){
				response.writeHead(200, {'Content-Type': 'text/html'});
				console.log(`serving html: ${pathName}`);
			}
			else if (pathName.endsWith('.css')){
				response.writeHead(200, {'Content-Type': 'text/css'});
				console.log(`serving css: ${pathName}`);
			}
			else if (pathName.endsWith('.js')){
				response.writeHead(200, {'Service-Worker-Allowed': '/', 'Content-Type': 'application/javascript'});
				console.log(`serving js: ${pathName}`);
			}
			else {
				response.writeHead(200);
				console.log(`serving other: ${pathName}`);
			}
			response.write(data);
			response.end();
		}
	});


}).listen(7000);