var fs = require('fs');
const path = require('path')

console.log(path.resolve('../../'))

function copy(a){
    var readable = fs.createReadStream(path.resolve('../../') + a, { encoding: 'utf8', highWaterMark: 32*1024 });

    var writeable = fs.createWriteStream(__dirname + '/textcopy.txt');

    readable.pipe(writeable);
}

// copy('/notes.txt');
copy('/daily.txt');