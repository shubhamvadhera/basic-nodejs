var http = require('http')

http.get(
  {
    host: 'personatestuser.org',
    path: '/email'
  }, function (response) {
    var body = '';
    response.on('data', function(d) {
      body += d;
    });
    response.on('end', function() {
      var parsed = JSON.parse(body);
      console.log(parsed.email);
      console.log(parsed.pass);
    });
})