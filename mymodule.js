var fs = require('fs')
var str

module.exports = function readDir(directory, ext) {
  fs.readdir(directory, function doneReading(err, dirContents) {
      if (err) {
          throw err;
      }
    for (var i = 0; i < dirContents.length; i++) {
      str = dirContents[i]
      if (str.endsWith(ext)) {
        console.log(dirContents[i])
      }
    }
  })
}