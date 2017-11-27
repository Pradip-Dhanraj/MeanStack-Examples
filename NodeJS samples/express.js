const express = require('express');

var app = express();

app.get('/',function (req, res) {
  res.send('this is default page');
})

app.get('/profile/:id',function (req, res) {
  res.send('requested profile of id ' + req.params.id);
})

app.get('/index',function (req, res) {
  res.sendFile(__dirname+'/index.html');
})

app.listen(3000);
