var express = require('express');
var path = require('path');
var favicon = require('serve-favicon')
var app = express();

// Define the port to run on
app.set('port', 3000);
app.use(favicon(path.join(__dirname, 'src', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'src')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
// var http = require('http');
// var fs = require('fs');
// var index = fs.readFileSync('./src/index.html');



// http.createServer(function (req, res) {
//   console.log('Server running on 9615...');
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end(index);
// }).listen(9615);