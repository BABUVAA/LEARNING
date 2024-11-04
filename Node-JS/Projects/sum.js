const sumRequestHandler =(req, res )=>{
console.log("1. in Sum  Request Handler", req.url);
const body =[];
let result;
req.on('data', chunk => {body.push(chunk)
  console.log("2. Chunk came");   
});
req.on('end',()=>{
  console.log("3. Chunk came");
  const bodyStr=Buffer.concat(body).toString();
  const params = new URLSearchParams(bodyStr);
  const bodyObj=Object.fromEntries(params);
  result = Number(bodyObj.first) + Number(bodyObj.second);
  console.log(result);
 
  console.log("4. Sendig the response");
  res.setHeader('Content-Type','text/html');
  res.write(`<html>
          <head><title>Calculator</title></head>
          <body>
            <h1>Your sum is ${result}</h1>
            </body>  
  </html>`); 
  return res.end();
}
);
}

exports.sumRequestHandler = sumRequestHandler;