const http =require('http');
const fs = require('fs');

const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers); 
  //process.exit();// stops event loop
  
  // sending response
  // res.setHeader('Content-Type','text/html');
  // res.write('<html>');
  // res.write('<head><title>Learning Node</title></head>');
  // res.write('<body>HEllo</body');
  // res.write('</html>');
  // res.end();

  //routing request
  if(req.url === '/')
    {
      res.setHeader('Content-Type','text/html');
      res.write('<html>');
      res.write('<head><title>Learning Node Home</title></head>');    
    res.write('<body>Hello this is Home</body');
    return res.end();
    }
  else if(req.url === '/products')
    {
    res.write('<body>Hello this are Products');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="name"/>');
    res.write('<br/>');
    res.write('<button type="submit">submit</button>')
    res.write('</form>');
    res.write('</body>');
    return res.end();
    } 
  else if (req.method == 'POST' && req.url.toLowerCase() === '/submit-details' ){
      res.statusCode = 302;
      res.setHeader('Location','/')
      return res.end();
  }
    res.write('</html>');
    return res.end();
  
});

const PORT=8080;

server.listen(PORT,()=>{
  console.log(`Server is running on port : ${PORT}`);
});
