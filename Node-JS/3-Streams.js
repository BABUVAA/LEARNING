const fs = require('fs');


const userRequestHandler=((req,res)=>{
  console.log(req.url,req.method); 

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
    res.write('<label> Gender</label>')
    res.write('<input type="radio" name="Gender" value="male" id="male"/>');
    res.write('<label for="male"> Male</label>')
    res.write('<input type="radio" name="Gender" value="female"  id="female/>');
    res.write('<label for="female"> Female</label>');
    res.write('<button type="submit">submit</button>');
    res.write('</form>');
    res.write('</body>');
    return res.end();
    } 
  else if (req.method == 'POST' && req.url.toLowerCase() === '/submit-details' ){

    const body=[];
    req.on('data',chunk=>{
      console.log(chunk);
      body.push(chunk);
    })
    req.on('end',()=>{
     const fullbody= Buffer.concat(body).toString();
      const params = new URLSearchParams(fullbody);
      const bodyObject=Object.fromEntries(params);
     console.log(bodyObject);
    })

      res.statusCode = 302;
      res.setHeader('Location','/')
      return res.end();
  }
    res.write('</html>');
    return res.end();  
});


module.exports = userRequestHandler;