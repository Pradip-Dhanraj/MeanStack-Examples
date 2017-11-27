var events = require('./exportsModule.js');

var customevent = new events();

customevent.on('greet',function (msg) {
    console.log(msg);
});

customevent.greet('greet','Greet form import module');
