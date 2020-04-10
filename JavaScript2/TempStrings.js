// Template Strings

// const name = "bob";
// const age = 44;
// const pet = "cat";

// const greeting = "Hello " + name + " you seem to be doing" + greeting  + "!"

// const greetingBest = `Hello ${name} you seem to be ${age-10}. nice ${pet}`;

function greet(name='', age=30, pet='cat') {
    return `Hello ${name} you seem to be ${age-10}. nice ${pet}`;
}

// need to provide arguments 