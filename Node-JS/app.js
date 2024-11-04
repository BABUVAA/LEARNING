const http =require('http');
const userRequestHandler =require("./3-Streams");

const server=http.createServer(userRequestHandler);

const PORT=8080;

server.listen(PORT,()=>{
  console.log(`Server is running on port : ${PORT}`);
});
