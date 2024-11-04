const http = require("http");
const {requestHandler} = require("./handler")

const server =http.createServer(requestHandler);

const PORT=8080;
server.listen(PORT, ()=>{
  console.log(`Calculator Server started on Port: ${PORT}`)
}); 