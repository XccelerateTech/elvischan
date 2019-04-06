var fs = require('fs');

//1 check size

// var readable = fs.createReadStream('text.txt');
// readable.on('data', function(chunk){
//     console.log(chunk.length);
// });

//2 copy and write 

// var readable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 32*1024 });
// var writeable = fs.createWriteStream(__dirname + '/textcopy.txt');
// readable.on('data', function(chunk){
//     writeable.write(chunk);
// });

//3 use pipe

// var readable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 32*1024 });

// var writeable = fs.createWriteStream(__dirname + '/textcopy.txt');

// readable.pipe(writeable);

//4 path

const path = require('path')
console.log('__dirname：'+ __dirname)
console.log('__filename：'+ __filename)
console.log('process.cwd()：'+ process.cwd())
console.log('./：'+ path.resolve('./'))




