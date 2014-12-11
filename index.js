var restify = require('restify')
var fs = require('fs')

var certFile = process.env.CERT_FILE
var keyFile = process.env.KEY_FILE

var server = restify.createServer({
  certificate: fs.readFileSync(certFile),
  key: fs.readFileSync(keyFile)
});

server.listen(5000,function() {
  console.log("SSL test listening on 5000 for cert " + certFile + " and key " + keyFile)
});