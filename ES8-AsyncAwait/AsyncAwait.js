// ASYNC AWAIT


//fetch
// movePlayer(100, 'Left')
//     .then(() => movePlayer(400, 'Left'))
//     .then(() => movePlayer(10, 'Right'))
//     .then(() => movePlayer(300, 'Left'))
//async
async function playerStart() {
    const first = await movePlayer(100, 'Left'); //pause
    const second = await movePlayer(400, 'Left'); //pause
    await movePlayer(10, 'Right'); //pause
    await movePlayer(300, 'Left'); //pause
}



//fetch
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(resp => resp.json()
//     .then(console.log))
//async
async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    console.log(data);
}
