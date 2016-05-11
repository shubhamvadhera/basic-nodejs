var fs = require('fs')
var str

function readDir() {
  fs.readdir(process.argv[2], function doneReading(err, dirContents) {
      if (err) {
          throw err;
      }
    for (var i = 0; i < dirContents.length; i++) {
      str = dirContents[i]
      if (str.endsWith(process.argv[3])) {
        console.log(dirContents[i])
      }
    }
  })
}
readDir()