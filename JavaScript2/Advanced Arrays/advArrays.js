// Advanced Arrays

////////////////////////// forEach 
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


////////////////////////// MAP: 
// always need to return something
// map creates a new array
const mapArray = array.map(num => num * 2);
console.log('map', mapArray);



////////////////////////// FILTER: 
// have to return
/// filter the array, 
// iterate one by one 
// return 1 greater than 5
const filterArray = array.filter(num => num === 5)
console.log('filter', filterArray);


////////////////////////// REDUCE: 
// have to return value
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 5);
console.log('reduce', reduceArray)

