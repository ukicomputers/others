var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('See my apps on github.com/UKI-COMPUTERS/UkiApps! Hello World!');
}).listen(8080);