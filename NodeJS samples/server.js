const http = require('http');
var server = http.createServer(function(req,res) {
  console.log('requestt is made on '+req.url);
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('Hey server is working!!');
});

server.listen(3000,'127.0.0.1');
console.log('server is working with address http://127.0.0.1:3000/ !!');
