const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;

    res.setHeader("content-type", "text/html");

    if(url=== '/'){
        res.write(`
            <html>
                <head>
                    <title>Enter Message</title>
                </head>
                <body>
                    <form method="POST" action="/log">
                        <input type="text" name="message">
        
                        <button type="submit">Save</button>
                    
                    </form>

                </body>
            </html>
            `);
            return res.end();
    }

    if(url==="/log" && method=== "POST"){
        fs.appendFileSync("message.txt", "fatma");
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end();
    }
  
    // res.setHeader('Content-Type', 'text-plain');
    // res.setHeader('Content-Type', 'application/json')
    // res.setHeader("Content-Type", "text-html")
    // res.statusCode = 200;
    // res.statusMessage = 'ok';

    // res.write("<html><head><a>merhaba</a></head></html>");
    // res.end();

//     fs.readFile("index.html", function(error, file){
//         if(error){
//             res.setHeader("Content-Type", "text-plain")
//             res.statusCode = 404;
//             res.statusMessage = 'not found';
//             res.end("dosya bulunamadı");
//         }else{
//             res.setHeader("Content-Type", "text-html")
//             res.statusCode = 200;
//             res.statusMessage = 'Ok';
//             res.end(file);
//         }
//     })
 });


server.listen(3000);
console.log("listening port on 3000...");