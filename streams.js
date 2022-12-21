const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });

const writeStream= fs.WriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('------------ NEW CHUNK ------------')
//     console.log(chunk);
//     writeStream.write('\nNewChunk\n');
//     writeStream.write(chunk);
// });

// piping
readStream.pipe(writeStream);