//modules
//CommonJS,every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
console.log(names)

const func = require('./3-function')
console.log(func)
 func(names.bhup)
