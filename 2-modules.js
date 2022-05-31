const names = require('./3-names');
const sayHi = require('./4-utils');
const data = require('./5-alterantive-module-syntax');
require('./6-more-about-modules');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
console.log(data);
