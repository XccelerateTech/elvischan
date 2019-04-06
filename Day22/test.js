//1.readFile function

// const fs = require('fs');
// let name = 'KK';
// let chars = name.split('');
// chars.forEach(
//     function (c) {
//         console.log(c);
//     }
// );
// fs.readFile('a.txt', function (err, data) {
//     console.log('ok'); 
//     console.log(data);
// });
// console.log(5);

//2.create server

// var http = require('http');
// http.createServer(
//     function (req, res) {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Hello world elvis');
//     }).listen(8080, '127.0.0.1');

//3. node modules fs

// var fs = require('fs');

// var greeting = fs.readFileSync('a.txt');

// var greeting2 = fs.readFileSync('a.txt', 'utf8');

// console.log(greeting);
// console.log(greeting2);

//4.  Sending JSON

// var http = require('http');

// http.createServer(function(req, res){

//     res.writeHead(200, { 'Content-Type':'application/json' });
//     var obj = {
//         name: 'John',
//         surname: 'Doe'
//     }
//     res.end(JSON.stringify(obj));

// }).listen(8080, '127.0.0.1');

//5

// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res){

//     res.writeHead(200, { 'Content-Type':'text/html' });
//     fs.createReadStream(__dirname + '/index.html').pipe(res);

// }).listen(8080, '127.0.0.1');

//6
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    if(req.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/1.png') {
        fs.createReadStream(__dirname + '/1.png').pipe(res);
    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(8080, '127.0.0.1');