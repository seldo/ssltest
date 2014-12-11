var restify = require('restify')

var HOST_NAME = process.env.HOST_NAME

var client = restify.createClient({
  url: 'https://' + HOST_NAME + ':5000'
});

client.get('/', function(err, req) {

  req.on('result', function(err, res) {

    res.body = '';
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      res.body += chunk;
    });

    res.on('end', function() {
      console.log(res.body);
    });
  });
});