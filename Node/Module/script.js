const fs = require('fs') // import fs from 'fs'; ES6

// fs module has a readfile method
// readfile is asynchronous 
fs.readFile('./hello.txt', (err, data) => {
        if(err) {
            console.log('errr');
        }
        console.log('1', data.toString('utf8'));
})
// returns 
{/* <Buffer 68 65 6c 6c 6f 6f 6f 6f 6f 6f 6f 20 74 68 65 72 65 21 21> */}
// without toString


//Sync means Synchronouse
const file = fs.readFileSync('./hello.txt');
console.log('2', file.toString());
// returns
// 2 hellooooooo there!!
// 1 hellooooooo there!!


// APPEND
fs.appendFile('./hello.txt', ' this is so cool!', err => {
    if (err) {
        console.log(err)
    }
})
// added to the txt file


// WRITE
fs.writeFile('bye.txt', 'Sad to see you go', err => {
    if (err) {
        console.log(err)
    }
})
// add bye.txt file to your folder with message