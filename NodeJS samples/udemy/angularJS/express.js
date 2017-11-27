var express = require('express');
var mysql = require('mysql');

var htmlController = require('./controller/htmlController');
var apiController = require('./controller/apiController');
//console.log(express.toString());

var app = express();
app.use('/assets',express.static(__dirname+'/public'));
app.set('view engine','ejs');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'nodejs'
  });

  connection.connect();

htmlController(app,connection);
apiController(app);



app.listen(3000);