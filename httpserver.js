const { create } = require("domain");
const http = require("http")

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end("<h2> Hii this is React js</h2> <p> working on react js module entire website</p>")
})

server.listen(port, ()=>{
    console.log("server is listen on port ${port}")
})