// NOTE: NODE EVENT EVENTEMMITER
const events = require('events');

// 1
// var myEmitter = new events.EventEmitter();    // created object of EventEmitter
// myEmitter.on('someEvent',function(msg){console.log(msg);});   //event name and event function
// myEmitter.emit('someEvent','event message is  here provided here !!');    //calling EventEmitter with parameters manually

// 2   --    complex events
const util = require('util');

var Person = function(name)
{
  this.name = name;
};                                        // created new object constructor person

util.inherits(Person,events.EventEmitter);    // all object inherits property of EventEmitter
 var pradip = new Person('pradip');
 var vipul = new Person('vipul');
 var nilisha = new Person('nilisha');

 var people = [pradip,vipul,nilisha];

 people.forEach(function(person){
    person.on('speak',function(msg){console.log(person.name + ' said ' + msg);});   //using loop set events
 });

nilisha.emit('speak','hello world');
