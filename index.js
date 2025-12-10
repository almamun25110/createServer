let http = require("http")
let server = http.createServer ((req,res)=>{
    if(req.url=="/news"){
        let obj = {
            status:1,
            data:[
                {
                    newsTitile: 'ws',
                    newsDes: "Ws Hello"
                },
                {
                    newsTitile: 'IIP',
                    newsDes: "IIP Hello"
                }
            ]
        }
        res.end(JSON.stringify(obj))
    }
    if(req.url=="/about"){
        
    }
    if(req.url=="/course"){
        
    }
    res.end("Welcome to panchagarh")
})

server.listen("8000")//http://localhost:8000