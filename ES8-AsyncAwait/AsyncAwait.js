// ASYNC AWAIT

// movePlayer(100, 'Left')
//     .then(() => movePlayer(400, 'Left'))
//     .then(() => movePlayer(10, 'Right'))
//     .then(() => movePlayer(300, 'Left'))

async function playerStart() {
    const firstMove = await movePlayer(100, 'Left');
    await movePlayer(400, 'Left');
    await movePlayer(10, 'Right');
    await movePlayer(300, 'Left');
}