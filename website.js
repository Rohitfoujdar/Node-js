const { console } = require("console");
const http = require("http")

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.setHeader("Content-Type", "text/html")
    console.log(req.url)
    if(req.url == "/"){
        res.statusCode = 200;
        res.end("<h2> Hii this is React js</h2> <p> working on react js module entire website</p>")
    }
    else if(req.url == "/about"){
        res.statusCode = 200;
        res.end("<h2> Hii this is React Native</h2> <p> not working on react js module entire website</p>")
    }
    else{
        res.statusCode = 404;
        res.end("<h2> Not found </h2>")
    }
})

server.listen(port, ()=>{
    console.log("server is listen on port ${port}")
})