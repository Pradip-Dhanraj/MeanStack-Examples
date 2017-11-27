var EventEmitter = require('events');

module.exports =  class greet extends EventEmitter {
constructor()
{
super();
this.greeting = 'Hello world';
}
greet(typ, msg)
{
console.log(typ);
this.emit(typ, msg);
}
}