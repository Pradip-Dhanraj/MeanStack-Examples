var bodyParser = require('body-parser');
var urlEncodedParser =  bodyParser.urlencoded({ extended: false });
module.exports = function(app, connection)
{
    
    app.get('/login',function (req, res) {
        res.render('login');
    });
    
    app.post('/login',urlEncodedParser, function (req, res) {
        if(!req.body) res.send('Error 404 : data not found');
        console.log('first name : '+req.body.firstname);
        console.log('last name : '+req.body.lastname);
        connection.query(`insert into person  (name,surname) values('${req.body.firstname}','${req.body.lastname}');`, function (error, results, fields) {
            if (error) console.log(error);
            //console.log('The solution is: ', results);
            res.send('Data from login page inserted in database '+ results);
            console.log(results);
          });
        
    });
    
    app.get('/',function (req, res) {
       res.send('this is udemy default page');
    });
    
    app.get('/home',function (req, res) {
        res.send('this is udemy home page');
     });
    
    app.get('/profile/:name',function (req, res) {
        res.send(`this is profile of ${req.params.name}`);
     });
    
    
    
    function Person(name , surname) {
        this.name = name;
        this.surname = surname;
        this.query = '';
    }
    
    var developer = new Person('Pradip','Dhanraj');
    
    app.get('/developer/:name',function(req, res)
    {
        developer.query = req.query.q;
        console.log(req.query.q)
        res.render('index',{developer:developer});
    });
}