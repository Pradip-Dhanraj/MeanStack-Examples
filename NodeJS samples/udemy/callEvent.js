//var emitter = require('./emitter.js');        //simple event emitter
var emitter = require('events');          //using core modules from node js
var emt = new emitter();


emt.on('greet',function() {
    console.log('from greet 1');
});
emt.on('greet',function() {
    console.log('from greet 2');
});
emt.on('greet',function() {
    console.log('from greet 3');
});

emt.emit('greet');