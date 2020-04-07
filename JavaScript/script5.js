// Loops

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
    todos.pop(); 
}