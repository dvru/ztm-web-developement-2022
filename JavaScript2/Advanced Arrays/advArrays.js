// Advanced Arrays

// const array = [1, 2, 10, 16];
// const newArray = array.forEach((num) => {
//     num *2;
// })
// console.log(newArray);
// ^^^^^ not storing the values.



//  storing the value within double, 
// and push that within the empty array.
// forEach loops over the array
const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log('for each', double);


/////////////// .map, .filter, .reduce

// Map: always need to return something
// map creates a new array
const mapArray = array.map((num) => {
    return num * 2;
})

console.log('map', mapArray);