var count = 0;
var fs = require('fs')
var str = String(fs.readFileSync(process.argv[2]))
console.log(str.split("\n").length)