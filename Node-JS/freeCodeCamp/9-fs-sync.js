const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/subfolder/test.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile('./content/result-async.txt',`here is the result :${first},${second}`,(err, result)=>{
        if(err) console.log(err);
        console.log(result);
    });
  });
});
 