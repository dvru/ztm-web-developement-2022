// reference type
var object1 = { value:10 };
var object2 = object1;
var object3 = { value:10 }
// object1 === object2
// true
// object1 === object3
// false
// object3 = object2
// {value: 10}
// object1 === object3
// true


// //context vs scope
const object4 = {
    a: function() {
        console.log(this);
    }
}
// instantiation

