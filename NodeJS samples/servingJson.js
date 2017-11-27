const serverFunction = require('./serverFunction');
var customfunc= function () {
  const fs = require('fs');
  var myReadStream = fs.createReadStream(__dirname+'/index.html','utf8');
  return myReadStream;
}


//serverFunction.serverFunc('html','demo data',customfunc);
serverFunction.serverFunc('json',{name:'Pradip',surname:'Dhanraj'},'');

// NOTE: tried to use export module to  save rewrtirng of server code , worked fine with basic  function of accessing global objects
