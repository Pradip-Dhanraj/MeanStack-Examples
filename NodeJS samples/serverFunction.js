const http = require('http');
var serverFunc = function (type,resData,customfunc) {
  console.log(type);
  console.log(resData);
  var server = http.createServer(function(req,res) {
    console.log('request is made on '+req.url);

    res.writeHead(200,{'Content-Type':'text/'+type});
    if (type=='html') {
      var myReadStream = customfunc();
      myReadStream.pipe(res);
    }else if (type=='json') {
      res.end(JSON.stringify(resData));
    }

    //res.end(resData);
  });

  server.listen(3000,'127.0.0.1');
}

var customServer = function (customfunc) {
  //console.log(type);
  //console.log(resData);
  var server = http.createServer(function(req,res) {
    //console.log('request is made on '+req.url);
    customfunc(req, res );
    //res.writeHead(200,{'Content-Type':'text/'+type});
    //res.end(resData);
  });

  server.listen(3000,'127.0.0.1');
}



module.exports = {
  serverFunc : serverFunc,
  customServer : customServer
};
