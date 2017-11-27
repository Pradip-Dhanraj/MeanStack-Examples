const http = require('http');
const fs = require('fs');
// NOTE:  Reading Strem from readMe.txt and write to writeMe.txt
//var myReadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');
//var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt');
// myReadStream.on('data',function (chunk) {
//   console.log('new chunk received');
//   console.log(chunk);
//   myWriteStream.write(chunk);
//});
//myReadStream.pipe(myWriteStream);         //alternate use pipe.


var server = http.createServer(function(req,res) {
  res.writeHead(200,{'Content-Type':'text/plain'});

  var myReadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');
  myReadStream.pipe(res);
  //res.end('Hey server is working!!');
});

server.listen(3000,'127.0.0.1');
