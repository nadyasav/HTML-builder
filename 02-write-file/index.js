const process = require('process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

fs.appendFile(path.join( __dirname, 'text.txt'), '', function (err) {});

console.log('Hello, write something.');

const {stdin: input, stdout: output} = require('process');
const rl = readline.createInterface({input, output});

rl.on('line', (input) => {
  fs.appendFile(path.join( __dirname, 'text.txt'), `${input}`, function (err) {});
  if((input.toLowerCase()).replace(/\s/g, '') == 'exit'){
    process.exit();
  }
});

process.stdin.setEncoding('utf8');
process.stdin.on( 'data', function( key ){
  if (key === '\u0003') {
    process.exit();
  }
});

process.on('exit', () => console.log('Goodby!'));
