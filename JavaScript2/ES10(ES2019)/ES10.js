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