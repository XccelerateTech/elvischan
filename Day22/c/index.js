var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    console.log(req.url );
    if(req.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/assets/logo.png') {
        fs.createReadStream(__dirname + '/assets/logo.png').pipe(res);
    } else if(req.url === '/assets/flower-icon.png') {
        fs.createReadStream(__dirname + '/assets/flower-icon.png').pipe(res);
    } else if(req.url === '/flowerss.css') {
        fs.createReadStream(__dirname + '/flowerss.css').pipe(res);
    }  else if(req.url === '/assets/flowershop.jpg') {
        fs.createReadStream(__dirname + '/assets/flowershop.jpg').pipe(res);
    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(8080, '127.0.0.1');
