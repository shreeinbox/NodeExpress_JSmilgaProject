//Calling JS functions and using imports

//const john = 'john'
//const peter = 'peter'

//const names = require('./2-names')
//const sayHI = require('./3-utils')

//sayHI(names.peter)
//const s = require('./5-number')
//console.log(s);
//sayHi(john);
//sayHi(peter);
//sayHi('Susan');

//----------------------
//using lodash package - utility package 
//helps simple functionalities like working with arrays

const _ = require('lodash');

//arrays of arrays
const items = [1,[2,[3,[4]]]];

console.log(_.flattenDeep(items))  // gives just a single array of elements

