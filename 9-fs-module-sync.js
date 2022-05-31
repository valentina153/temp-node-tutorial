const {readFileSync, writeFileSync} = require('fs');
console.log('start');
// second way
// const fs = require('fs');
// fs.readFileSync;

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// with writeFileSync if there is the file it is going to write in that file
// if there is no file with that name node is going to create file
writeFileSync('./content/result-sync.txt', 
`Here is the result: ${first}, ${second}`,
{flag: 'a'} // the flag: a means add, and it is going to add text
// without that flag it is just going to write the text and remove anything that it is been before
);

console.log('done with this task');
console.log('starting the next one');