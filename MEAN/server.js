const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', api);
app.use('/addUser',require('./server/routes/addUser'));
app.use('/login',require('./server/routes/login'));

var urlEncodedParser =  bodyParser.urlencoded({ extended: false });
app.post('/dashboard',urlEncodedParser, function (req, res) {
    if(!req.body) res.send('Error 404 : data not found');
    console.log('first name : '+req.body.firstname);
    console.log('last name : '+req.body.lastname);
    // connection.query(`insert into person  (name,surname) values('${req.body.firstname}','${req.body.lastname}');`, function (error, results, fields) {
    //     if (error) console.log(error);
    //     //console.log('The solution is: ', results);
    //     res.send('Data from login page inserted in database '+ results);
    //     console.log(results);
    //   });
    
});

app.post('/login',urlEncodedParser, function (req, res) {
    if(!req.body) res.send('Error 404 : data not found');
    console.log('first name : '+req.body.firstname);
    console.log('last name : '+req.body.lastname);
    // connection.query(`insert into person  (name,surname) values('${req.body.firstname}','${req.body.lastname}');`, function (error, results, fields) {
    //     if (error) console.log(error);
    //     //console.log('The solution is: ', results);
    //     res.send('Data from login page inserted in database '+ results);
    //     console.log(results);
    //   });
    
});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
    //res.sendFile('src/app/index.html');
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));