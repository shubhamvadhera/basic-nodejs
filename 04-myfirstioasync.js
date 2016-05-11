var fs = require('fs')

function countLines() {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
      if (err) {
          throw err;
      }
    console.log(String(fileContents).split("\n").length);
  })
}
countLines()