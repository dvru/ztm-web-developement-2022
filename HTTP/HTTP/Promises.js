const promise = new Promise((resolve, reject) => {
 if (true) {
    resolve('Worked');
 } else {
    reject('Error, it broke')
    }
})


const promise2 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 100, 'HII')
})
const promise3 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 1000, 'HELOOOO')
})
const promise4 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 3000, 'BB')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
})
// waits 5 seconds then returns (4) ["Worked", "HII", "HELOOOO", "BB"]



promise.then(result => result.log(result)); // Worked


promise
.then(result => result + '!')
.then(result2 => {
    console.log(result2)
})
// Worked!

promise
.then(result => result + '!')
.then(result2 => {
    throw Error
    console.log(result2)
})
.catch(() => console.log('error!'))
// error!

promise
.then(result => {
    throw Error
    return result + '!'
})
.then(result2 => {
    console.log(result2)
})
.catch(() => console.log('error!'))
// error!



promise
    .then(result => result + '!')
    .then(result2 => result2 +'?')
    .catch(() => console.log('error!'))
    .then(result3 => {
        console.log(result3 + '!');
    })
// Worked!?!