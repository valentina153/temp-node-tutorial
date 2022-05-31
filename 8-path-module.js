const path = require('path');

console.log(path.sep); // returns a platform specific separator

// joins a sequence of path segments using that platform specific separator as the limiter
// and returns a normalized resulting path
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// returns the base name
const base = path.basename(filePath);
console.log(base);

//returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);