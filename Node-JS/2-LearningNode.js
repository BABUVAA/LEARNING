const http= require('http');

const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  process.exit();
});

server.listen(8080,()=>{
  console.log('server is running at 8080');
});