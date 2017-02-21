// index.js

var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var app = express();
app.use(express.static(__dirname + '/'));

var run = http.createServer(app);
run.listen(3000, function(error){
 if(!error){
//  db_config.get_open();
 }
 console.log('Express server listening on port 3000');
});
app.get('/', function (req, res) {
  //res.send('wafer');
  fs.readFile('./index.html', function(error, data){
    res.sendfile('index.html');
  });
});

/*
app.listen(3000, function(){
  console.log('Server On!');
});
*/
