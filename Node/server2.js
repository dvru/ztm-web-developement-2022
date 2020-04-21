const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('<h1>Helllo</h1>')
    next();
})
app.get('/', (req, res) => {
    res.send("testtest");
})

app.listen(3002)











// app.get('/', (req, res) => {
//     res.send("getting root");
// })

// app.get('/profile', (req, res) => {
//     res.send("getting profile");
// })

// app.post('/profile', (req, res) => {
//     const user = {
//         name: "sally",
//         hobby: "eating"
//     }
//     res.send(user);
// })