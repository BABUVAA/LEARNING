const {sumRequestHandler} = require("./sum.js");

const requestHandler=(req,res)=>{
console.log(req.url, req.method);
if(req.url === "/")
{
  res.setHeader('Content-Type','text/html');
  res.write(`<html>
            <head><title>Calculator</title></head>
            <body>
              <h1>welcome to the Calculator </h1>
              <a href="/calculator">Go to Calculator</a>
              </body>  
    </html>`);
    return res.end
 }
 else if(req.url === "/calculator")
{
  res.setHeader('Content-Type','text/html');
  res.write(`<html>
            <head><title>Calculator</title></head>
            <body>
              <h1>here is the Calculator </h1>
              <form action="/calculate-result" method="POST"> 
              <input type="text" placeholder="First Num" name="first" />
              <input type="text" placeholder="Second Num" name="second" />
              <input type="submit" value="Sum">
              </form>  
            </body>  
    </html>`);
    return res.end
}
else if(req.url.toLowerCase() === "/calculate-result" && req.method === 'POST'){
    return sumRequestHandler(req, res);
}
 res.setHeader('Content-Type','text/html');
 res.write(`<html>
           <head><title>Calculator</title></head>
           <body>
             <h1>404 Page not found </h1>
             <a href="/">Go to Home</a>
             </body>  
   </html>`);
   return res.end
}

exports.requestHandler=requestHandler;