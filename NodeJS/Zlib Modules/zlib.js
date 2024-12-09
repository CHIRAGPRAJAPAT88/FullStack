const zlib = require('node:zlib');
const fs = require('node:fs');


// how to zip file name is chirag.png

let source = fs.createReadStream('chirag.png');

let dest = fs.createWriteStream('chirag.png.gz');

source.pipe(zlib.createGzip()).pipe(dest);


// how to unzip  file name is hello.createGzip

let source2 = fs.createReadStream('hello.rar.gz');

let dest2 = fs.createWriteStream('hello.rar');

source2.pipe(zlib.createUnzip()).pipe(dest2);





