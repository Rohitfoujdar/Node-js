const fs = require('fs');

// fs.readFile("file.txt", "utf8", (err, data)=>{
//     console.log(err, data);
// })

// const a= fs.readFileSync("file.txt")
// console.log(a.toString())

// fs.writeFile("file2.txt", "thi is data", ()=>{
//     console.log("Written to the file");
// })

b= fs.writeFileSync("file2.txt", "this is data")
console.log(b);

console.log("Finished reading file");