// function first() {
//     var greet = 'Hi';
//     function second() {
//         alert(greet);
//     }
//     return second;
// }
// var newFunc = first();
// newFunc();

// newer code, using arrow functions, and variable


// Closures: 
//a function ran. 
// the function executed. 
// It's never going to execute again.
// BUT it's going to rememeber that there are reference to those variables
// so the child scope always has access to the parent scope.

const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();





//Currying 
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);



//Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5)

// f and g are sum
// a is 5 
// 


/////////////// IMPORTANT 
// Avoiding Side Effects, functional purity
var a = 1;
function b() {
    a = 2;
}

//The side effect is the changing the a variable within the function 
// that effects outside of it

