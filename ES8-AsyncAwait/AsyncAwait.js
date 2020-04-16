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


const urls = [
    'https://jsonplaceholder.typicod.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => 
    fetch(url).then(resp => resp.json())
)).then(array => {
    console.log('users', array[0])
    console.log('posts', array[1])
    console.log('albums', array[2])
})

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
            console.log('users', users)
            console.log('posts', posts)
            console.log('albums', albums)
    } catch (err) {
        console.log('oops', err)
    }
}