var http = require('http');
var express = require('express');
var app = express();
/*var server = http.createServer(function (req, res) {


  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<!doctype html>\n<html lang="en">\n' +
    '\n<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' +
    '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
    '\n\n<h1>Test!</h1>\n' +
    '<div id="content">Testing</div>' +
    '\n\n');
  res.end();
});
server.listen(8080);*/



var fs = require("fs");
var zlib = require('zlib');

var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('note.txt');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('note.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log("File Compressed.");

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function (chunk) {
  data += chunk;
});

readerStream.on('end', function () {
  console.log(data);
});

readerStream.on('error', function (err) {
  console.log(err.stack);
});



exports.world = function () {
  console.log('Hello World');
}

var hello = require('./hello');
var is = 0;
app.get('/', function(req, res)
{
  
    is++;
  res.send("hehiehriehr hejhej" + is);
});
app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})


hello.world();
hello.counter();

// https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm