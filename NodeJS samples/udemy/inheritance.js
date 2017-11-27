var util = require('util');
var eventEmitter = require('events');

function Person(name,surname) {
    this.name = name;
    this.surnmae = surname;
}

function Developer() {
    Person.call(this,'1','2');
    //eventEmitter.call(this);
    this.badgeNumber = '123456';
    this.greetFunction = function () {
        //this.emit('greet',`Hi, ${this.name} ${this.surname} and my employee number is ${this.badgeNumber}`);
        console.log('from emit function');
    }
}

Person.prototype.say = function () {
    console.log('say function');
}

Person.prototype.object = function () {
    this.objName = 'object';
    
}

util.inherits(Developer, Person);

Developer.prototype.bye = function () {
    console.log('from developer.prototype.bye function !!');
}

var developer = new Developer();
// developer.on('greet',function (msg) {
//     console.log(msg);
// });
developer.greetFunction();




