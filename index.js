const { log } = require("console");
const http =require("http");

//create the server 
const server = http.createServer(async(req,res)=>{
    res.writeHead(200,{'Content-type':'text-plain'});
    res.write("nodejs server")
    res.end()
})

const PORT=4000
server.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
})