const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.post('/',function (req, res) {
    if(!req.body) res.send('Error 404 : data not found');
    console.log('first name : '+ req.body.firstname);
    console.log('last name : '+ req.body.lastname);
    var count = '';
    connection((db) => {
       db.collection('users').find({
            "name":`${req.body.firstname} ${req.body.lastname}`
        } ).count();
        // db.collection('users')
        //     .insertOne({
        //         "name":`${req.body.firstname} ${req.body.lastname}`
        //     });
        console.log(count);
    });
    
});

module.exports = router;