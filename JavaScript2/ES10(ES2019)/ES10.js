const array = [1, 2, 3, 4, 5]
array.flat();
// (5) [1, 2, 3, 4, 5]

const array2 = [1, [2, 3], [4, 5]]
array2.flat();
// (5) [1, 2, 3, 4, 5]

const array3 = [1, 2, [3, 4, [5]]]
array3.flat();
// (5) [1, 2, 3, 4, Array(1)]

const array3 = [1, 2, [3, 4, [5]]]
array3.flat(2);


// cleaning up arrays
const entries = ['bob', 'sally',,,,,'cindy']
entries.flat();


// deleting space between strings using .trimStart & .trimEnd
const userEmail = '                eddyeagle@gmail.com'
const userEmail2 = 'johnyygen@gmail.com             '
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())


// fromEntries: transforming a list of key value pairs into an object
userProfiles = [['commanderTom', 23], ['derekZ', 40], ['hanzel', 18]]
const obj = Object.fromEntries(userProfiles)
Object.entries(obj)

// {commanderTom: 23, derekZ: 40, hanzel: 18}