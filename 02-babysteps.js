var sum=0
for (i = 0; i < process.argv.length; i++) {
    if (i>1) {
    sum += Number(process.argv[i])
    }
}
console.log(sum)