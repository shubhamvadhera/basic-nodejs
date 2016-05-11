var http = require('http')
var bl = require('bl')
var queue = []
var received = 0

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
          return console.error(err)
      }
      queue[index] = data.toString()
      received++

      if (received == 3) {
          printResults()
      }
    }))
  })
}

function printResults () {
    for (var i = 0; i < 3; i++)
        console.log('URL ' + process.argv[2 + i])
    console.log('Done')
    for (var i = 0; i < 3; i++)
        console.log(queue[i])
}

for (var i = 0; i < 3; i++)
  httpGet(i)