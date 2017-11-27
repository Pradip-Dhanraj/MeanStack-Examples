var events = require('events');
var util = require('util');

function greet() {
 this.Greet='hello world';  
}

util.inherits(greet,events.EventEmitter);

greet.prototype.greeting = function(msg)
{
console.log(msg);
}

var greeter = new greet();

greet.prototype.helloMsg = function()
{
    console.log('hello message from hello function prototype');
}


greeter.on('greet',function (msg) {
    this.greeting(msg);
});

greeter.on('hello', function()
{
    this.helloMsg();
});

greeter.emit('greet','hi');

var greeter2 = new greet();

greeter.helloMsg();





