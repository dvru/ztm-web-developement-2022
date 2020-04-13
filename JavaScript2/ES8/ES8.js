// string padding
// .padStart();
// .padEnd();

'Turtle'.padStart(10);
"    Turtle"

'Turtle'.padEnd(10);
"Turtle    "

// trailing commas
const fun = (a,b,c,d,) => {
    console.log(a);
}
fun(1,2,3,4,)


//OBJECTS
Object.keys
Object.values
Object.entries


let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Grinch'
}

// returns the keys
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
}) 

// returns the values
Object.values(obj).forEach(value => {
    console.log(value);
})

// returns the array of the both key and value pairs
Object.entries(obj).forEach(value => {
    console.log(value);
})
