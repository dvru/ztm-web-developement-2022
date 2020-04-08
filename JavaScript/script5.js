// LOOPING

var todos = [
    "clean room",
    "brush",
    "exercise",
    "study javascript",
    "eat healthy"
];

// for (var i=0; i < todos.length; i++) {
//     console.log(todos[i] + "!");
// }

// for (var i=0; i < todos.length; i++) {
//     todos[i] = todos[i] + "!"; 
// }

var todoslength = todos.length;
for (var i=0; i < todoslength; i++) {
    console.log(todos[i]); 
}

todos.forEach(function(todo, i) {
    console.log(todo, i);
})


/// WHILE LOOP

// Increasing 
// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++
// }

// Decreasing
// var counterOne = 10;
// while (counterOne > 10) {
//     console.log("while",counterOne);
//     counterOne--;
// }

// var counterTwo = 10
// do {
//     console.log("do while", counterTwo);
//     counterTwo--;
// } while (counterTwo > 10)