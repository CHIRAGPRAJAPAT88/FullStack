const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');


let dir= __dirname;

let requestListener = (req, res)=>{
    
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write(indexHtml)
        res.end();
    }

    else if(req.url === '/style.css'){
        res.setHeader('Content-Type', 'text/css');
        res.write(css);
        res.end();
    }

    else if(req.url === '/script.js'){
        res.setHeader('Content-Type', 'text/javascript');
        res.write(js);
        res.end();
    }

    else{
        res.setHeader('Content-Type', 'text/html');
        res.write(errorHtml);
        res.end();
    }
}
