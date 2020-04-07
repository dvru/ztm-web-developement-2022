// JAVASCRIPT DATA STRUCTURES
// array & objects

//// ARRAY 
var list = ["tiger", "cat", "bear", "bird"]
// console.log(list[0][2]);

// list.shift();
// "tiger"
// list
// (3) ["cat", "bear", "bird"]0: "cat"1: "bear"2: "bird"length: 3__proto__: Array(0)
// list.pop();
// "bird"
// list
// (2) ["cat", "bear"]
// list.push("elephant")
// 3
// list
// (3) ["cat", "bear", "elephant"]

var number = [1,2,3,4]
var booleans = [true, false, true];

var mixedList = ["apple", 3, undefined, true, function apple() { 
console.log("apple"); }];

var functionList = [function apple() { console.log("apple"); 
}]

//// OBJECTS
var user = {
    name: "D",
    age: 25,
    hobby: "dance",
    isMarried: false,
};

user.favoriteFood = "spinach";
user.isMarried = true;
// {name: "D", age: 25, hobby: "dance", isMarried: true, favoriteFood: "spinach"}
// name: "D"
// age: 25
// hobby: "dance"
// isMarried: true
// favoriteFood: "spinach"