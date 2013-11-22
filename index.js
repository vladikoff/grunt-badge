var serv = require('node-static');
var file = new serv.Server('./static');
var port = process.env.PORT || 8972;
console.log('Server on port: ' + port);

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response);
  }).resume();
}).listen(port);
