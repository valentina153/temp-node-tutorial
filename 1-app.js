const amount = 9;

if (amount < 10){
    console.log('small number');
} else {
    console.log('large number');
}

console.log("hey it's my first node app!!!");


console.log('And now the GLOBALS');

console.log('__dirname - path to current directory ' + __dirname);
console.log('__filename - file name ' + __filename);
console.log('module - info about current module ');
console.log(module);
console.log('process - info about env where the program is being executed ')
console.log(process);

// that is not all the globals, just some
// some functions like console.log or setInterval or setTimeout are also global

// setTimeout - after some time that we chose do the command
// setInterval - do the command every second or any period of time that we chose

setInterval(() => {
    console.log('Hello World!')
}, 1000) // 1000 miliseconds or 1 second