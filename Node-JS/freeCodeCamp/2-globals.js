// Globals - No window 

// __dirname - Path to  current directory
// __filename - file name 
// require -    function to  use modules(CommonJS)
// module - info about module(file)
// process- info about environment where the program is being executed

console.log(__dirname)
console.log(__filename)
setInterval(()=>{
    console.log('Hello from interval')  // Will be printed every second in console  // Global scope  // No window object in node.js  // Global variables  // Accessible from anywhere in the code  // Global scope is not recommended in Node.js  // Global scope pollutes the global namespace  // Global scope can lead to naming conflicts  // Global scope is not recommended for storing sensitive data  // Global scope can lead to bugs and performance issues  // Global scope is not recommended for managing state  // Global scope is not recommended for managing side effects  // Global scope is not recommended for managing resources  // Global scope is not recommended for managing asynchronous operations  // Global scope is not recommended for managing complex data structures  // Global scope is not recommended for managing databases  // Global scope is not recommended for managing API keys  // Global scope is not recommended for managing access tokens  // Global scope is not recommended for managing authentication tokens  // Global scope is not recommended for managing
},1000);
