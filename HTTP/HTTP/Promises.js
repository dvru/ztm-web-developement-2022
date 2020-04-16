const promise = new Promise((resolve, reject) => {
 if (true) {
    resolve('Worked');
 } else {
    reject('Error, it broke')
    }
})

promise.then(result => console.log(result)); // Worked
