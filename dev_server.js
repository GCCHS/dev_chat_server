var connect = require('connect');
var http = require('http');
var serveStatic = require('serve-static')

var app = connect();
 
// Serve up public/ftp folder 
var serve = serveStatic('public/ftp', {'index': ['index.html', 'index.htm']})

// Create server 
var server = http.createServer(function(req, res){
  var done = finalhandler(req, res)
  serve(req, res, done)
}).listen(3000);