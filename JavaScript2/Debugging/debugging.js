const flattened = [[0, 1], [2,3], [4,5]].reduce(
    (a,b) => a.concat(b), []);

const flattened = [[0, 1], [2,3], [4,5]].reduce(
    (accumulator, array) => {
        // console.log('array', array);
        // console.log('accumulator', accumulator);
        debugger
        return accumulator.concat(array)
}, []);

//variable assigned
//has an array inside an array: nested array
//wants to flatten
// .reduce uses accumulator, array
// concats attaches itself to the array

//grabbing each array and adding it to the accumalator