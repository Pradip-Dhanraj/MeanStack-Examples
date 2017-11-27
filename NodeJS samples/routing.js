const serverFunction = require('./serverFunction');
const fs = require('fs');

var routingFunction = function (request, response) {
  console.log('request is made on '+request.url);
  if(request.url==='/index')
  {
    response.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/index.html','utf8').pipe(response);
  }else if (request.url==='/contact') {
    response.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/contact.html','utf8').pipe(response);
  }else if (request.url==='/api/json') {
    var jsonObj = [{name:'Pradip',surname:'Dhanraj'}];
    response.writeHead(200,{'Content-Type':'application/json'});
    response.end(JSON.stringify(jsonObj));
  }
  else {
    response.writeHead(404,{'Content-Type':'application/json'});
    response.end('try /home or /contact');
  }
}

serverFunction.customServer(routingFunction);
