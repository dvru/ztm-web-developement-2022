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

const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Closures: 
//a function ran. 
// the function executed. 
// It's never going to execute again.
// BUT it's going to rememeber that there are reference to those variables
// so the child scope always has access to the parent scope.