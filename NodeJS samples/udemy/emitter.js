
function emitter() {
    this.events = {};
}

emitter.prototype.on  = function (type,listner) { 
    this.events[type] = this.events[type] || [];
    this.events[type].push(listner);
}   

emitter.prototype.emit = function (type)
{
    if(this.events[type])
    {
    this.events[type].forEach(function(listener){
        listener();
    });
    }
}
 module.exports = emitter;